<script>
    import { navigating } from '$app/stores';

    export let data;
</script>

<ul>
    <li>
        <a href="/images?q=1">Image 1</a>
    </li>
    <li>
        <a href="/images?q=2">Image 2</a>
    </li>
    <li>
        <a href="/images?q=3">Image 3</a>
    </li>
    <li>
        <a href="/images?q=4">Image 4</a>
    </li>
    <li>
        <a href="/images?q=5">Image 5</a>
    </li>
</ul>


Currently navigating: {$navigating ? 'YES' : 'NO'}
<br/>
You selected image: {data?.image ? data?.image : 'none'}