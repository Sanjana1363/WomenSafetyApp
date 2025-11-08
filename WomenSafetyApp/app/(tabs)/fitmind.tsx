import React from "react";
import { Platform } from "react-native";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function FitnessScreen() {
  return (
    <LinearGradient colors={["#bbdefb", "#80deea"]} style={styles.container}>
      <Text style={styles.title}>💪 Fitness & Wellness</Text>
      <Text style={styles.subtitle}>Stay active, stay strong</Text>

      <View style={styles.cardContainer}>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>Step Tracker</Text>
          <Text style={styles.cardText}>Count daily steps with goals</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>Calories Burned</Text>
          <Text style={styles.cardText}>Estimate calories based on activity</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>Health Dashboard</Text>
          <Text style={styles.cardText}>View fitness + menstrual + safety stats</Text>
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
    color: "#01579b",
    textAlign: "center",
    marginBottom: 10,
    paddingTop: 50,
  },
  subtitle: {
    fontSize: 18,
    textAlign: "center",
    color: "#006064",
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
    color: "#01579b",
  },
  cardText: {
    fontSize: 16,
    color: "#333",
  },
});
