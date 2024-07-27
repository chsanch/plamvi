<script>
    export let size = 50;
    export let color = "#000";
</script>
  
  <style>
    .spinner {
      border: 8px solid #f3f3f3;
      border-top: 8px solid var(--spinner-color, #3498db);
      border-radius: 50%;
      width: var(--spinner-size, 50px);
      height: var(--spinner-size, 50px);
      animation: spin 1s linear infinite;
    }
  
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  </style>
  
  <div class="spinner" style="--spinner-size: {size}px; --spinner-color: {color};"></div>
  