import { ScrollView, StyleSheet } from "react-native";
import { Card, Text } from "react-native-paper";
import { mockedPosts } from "../data";

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {mockedPosts.map((p) => (
        <Card key={p.id}>
          <Card.Title title={p.title} />
          <Card.Content>
            <Text>{p.body}</Text>
          </Card.Content>
        </Card>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 12, gap: 12 },
});
