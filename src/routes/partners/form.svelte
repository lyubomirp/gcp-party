<script>
import { submit } from "$lib/submit";
</script>

<form 
    method="POST" 
    action="/api/partners" 
    enctype="multipart/form-data"
    use:submit
>
    <label for="file">Partners</label>
    <input type="file" name="file">
    <button type="submit">Submit</button>
</form>

<style>
    form {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    input {
        border-radius: 5px;
        padding: 0.4rem;
        border: none;
        border:1px solid #BEBEBE;
        padding: 7px;
        margin:0px;
        outline: none;
    }

    input:focus {
        outline: none;
    }

    label {
        margin: 0 0 3px 0;
        padding: 0px;
        display: block;
        font-weight: bold;
    }
</style>