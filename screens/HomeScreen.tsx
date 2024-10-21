import { ScrollView, StyleSheet } from "react-native";
import { Card, Text } from "react-native-paper";
import { useAppSelector } from "../store/hooks";
import { selectPostsWithAuthor } from "../store/posts/postsSlice";

export default function HomeScreen() {
  const posts = useAppSelector(selectPostsWithAuthor);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {posts.map((p) => (
        <Card key={p.id}>
          <Card.Title title={p.title} subtitle={p.user?.name} />
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
