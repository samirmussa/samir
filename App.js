import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.hero}>
        <Text style={styles.eyebrow}>Welcome Screen</Text>
        <Text style={styles.title}>Samir Mobile</Text>
        <Text style={styles.subtitle}>
          Your React Native workspace is ready. Explore, build, and ship.
        </Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Next steps</Text>
        <Text style={styles.cardText}>
          Edit App.js to change this screen or add new components.
        </Text>
        <Text style={styles.cardText}>
          Run on a device with Expo Go for instant previews.
        </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  hero: {
    alignItems: "center",
    marginBottom: 24,
  },
  eyebrow: {
    fontSize: 12,
    letterSpacing: 2,
    textTransform: "uppercase",
    color: "#94a3b8",
    marginBottom: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#f8fafc",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: "#cbd5f5",
    textAlign: "center",
    marginBottom: 16,
  },
  card: {
    width: "100%",
    backgroundColor: "#1e293b",
    paddingVertical: 16,
    paddingHorizontal: 18,
    borderRadius: 16,
    gap: 8,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#f8fafc",
  },
  cardText: {
    fontSize: 14,
    color: "#e2e8f0",
    lineHeight: 20,
  },
});
