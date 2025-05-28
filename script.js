import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.net.http.HttpRequest.BodyPublishers;
import java.nio.charset.StandardCharsets;

public class HuggingFaceChat {

    public static void main(String[] args) throws Exception {
        String apiKey = "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"; // Replace with your real token

        String requestBody = """
        {
          "provider": "fireworks-ai",
          "model": "Qwen/Qwen3-235B-A22B",
          "messages": [
            {
              "role": "user",
              "content": "What is the capital of France?"
            }
          ],
          "max_tokens": 5100002
        }
        """;

        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("https://api.huggingface.co/inference/chat/completions"))
            .header("Authorization", "Bearer " + apiKey)
            .header("Content-Type", "application/json")
            .POST(BodyPublishers.ofString(requestBody, StandardCharsets.UTF_8))
            .build();

        HttpClient client = HttpClient.newHttpClient();

        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());

        System.out.println("Response:");
        System.out.println(response.body());
    }
}
