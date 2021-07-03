<script context="module">
    // this is like a function to execute befr loading the page - 
    // Very useful to load the contents without any spinner - esp the starting page

    // IMP!! load function should always return a prop
    export async function load ({page, fetch}) {
        // svelte provides so many different things on load
        console.log('gettiing page:', page);
        console.log('getting fetch:', fetch);
        return  {
           props: {
            id : 'Sample Id Prop'
           }
           
           
        }
    };
</script>
<script>
    export let id;
</script>
<p>Id field from Header {id}</p>