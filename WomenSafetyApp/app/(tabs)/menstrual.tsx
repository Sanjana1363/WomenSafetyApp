import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Platform } from "react-native";

export default function MenstrualScreen() {
  return (
    <LinearGradient colors={["#f8bbd0", "#ce93d8"]} style={styles.container}>
      <Text style={styles.title}>🌸 Menstrual Health</Text>
      <Text style={styles.subtitle}>Track & take care of your cycle</Text>

      <View style={styles.cardContainer}>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>Cycle Tracker</Text>
          <Text style={styles.cardText}>Track periods, ovulation & fertile days</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>Symptoms & Mood</Text>
          <Text style={styles.cardText}>Log cramps, mood swings, and notes</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>Safe Day Alerts</Text>
          <Text style={styles.cardText}>Reminders & health tips for every phase</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#4a148c",
    textAlign: "center",
    marginBottom: 10,
    marginTop: 10,
    paddingTop: 50,
  },
  subtitle: {
    fontSize: 18,
    textAlign: "center",
    color: "#6a1b9a",
    marginBottom: 20,
  },
  cardContainer: {
    marginTop: 10,
  },
card: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 18,
    padding: 22,
    marginBottom: 18,

    // ✅ iOS shadows
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },

    // ✅ Android shadow
    elevation: 6,

    // ✅ Web shadow
    ...(Platform.OS === "web" && {
      boxShadow: "0px 6px 12px rgba(0,0,0,0.12)",
    }),
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 6,
    color: "#4a148c",
  },
  cardText: {
    fontSize: 16,
    color: "#333",
  },
});
