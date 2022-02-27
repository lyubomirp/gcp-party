<script>
    import Form from "./partners/form.svelte";
</script>

<div>
    <Form></Form>
</div>
<div>
    <slot></slot>
</div>

<style>
    :root {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    div {
        box-shadow: 0px 0px 2px gray;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        padding: 2rem;
        max-width: 20%;
        margin: 1rem auto;
    }
</style>
    