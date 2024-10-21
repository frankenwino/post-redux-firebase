import { ScrollView, StyleSheet } from "react-native";
import { Card, Text } from "react-native-paper";
import { useAppSelector } from "../store/hooks";
import { selectPosts } from "../store/postsSlice";

export default function HomeScreen() {
  const posts = useAppSelector(selectPosts);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {posts.map((p) => (
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
