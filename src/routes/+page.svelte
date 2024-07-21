<script>

    import { getTripContext } from '$lib/trip-state.svelte';


    const tripState = getTripContext();

  </script>
  
    <main class="container">
    <h1>Tes </h1>
    <div class="flex flex-col m-4">
      <p>Viajes realizados: {tripState.total}</p>
    </div>
  </main>

