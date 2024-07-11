<script>
    import { useChat } from '@ai-sdk/svelte';
  
    const { input, handleSubmit, messages, data } = useChat();
  </script>
  
    <main class="container">
    <h1>Chat</h1>

    <div class="flex flex-col m-4">
        <pre>{JSON.stringify($data, null, 2)}</pre>
    </div>
    <div class="flex flex-col">
      {#each $messages as message}
        <div class="flex flex-row">
          <span class="font-bold">{message.role}:</span>
          <span>{message.content}</span>
        </div>
      {/each}
    </div>
    <!-- <ul>
      {#each $messages as message}
        <li>{message.role}: {message.content}</li>
      {/each}
    </ul> -->
    <form onsubmit={handleSubmit}>
      <input bind:value={$input} placeholder="add a text"/>
      <button type="submit">Send</button>
    </form>
  </main>

