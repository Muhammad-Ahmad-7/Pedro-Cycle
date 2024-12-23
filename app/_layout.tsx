import { StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { Stack } from "expo-router";
import { supabase } from "@/lib/supabase";
import { useRouter, useSegments } from "expo-router";
import { Session } from '@supabase/supabase-js';

const HomeLayout = () => {
  const [session, setSession] = useState<Session | null>(null);
  const router = useRouter();
  const segments = useSegments();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (session === null) {
      // We haven't checked for the session yet
      return;
    }

    const inAuthGroup = segments[0] === 'auth';

    if (session && inAuthGroup) {
      // Redirect authenticated users from auth group to tabs
      router.replace('/(tabs)');
    } else if (!session && !inAuthGroup) {
      // Redirect unauthenticated users to sign up page
      router.replace('/auth/signup');
    }
  }, [session, segments]);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {session ? (
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      ) : (
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      )}
    </Stack>
  );
};

export default HomeLayout;

const styles = StyleSheet.create({
  // Add any styles you need here
});

