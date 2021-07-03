<script type="ts">
    import  {HEADEROBJ, MODELLIST} from './header-comp';
    import {onMount} from 'svelte'; 
    import { Button } from 'sveltestrap';
    // import Fa from 'svelte-fa/src/fa.svelte';
    // import { faFlag } from '@fortawesome/free-solid-svg-icons'
    onMount(() => {
        const divEl:HTMLCollectionOf<Element> =  document.getElementsByClassName('avatar');
        divEl[0].style.backgroundImage = `url(${HEADEROBJ['imageUrl']})`;
    })
  
</script>


<style lang="scss">
    @import './header.scss';
    

    .iconDivs {
        @include iconDivs;
    }

    .navBarContainer {
       @include navBarContainer;
    }


   .customNav {
     @include customNav;
       
   }

   .containerFluidDiv {
       height: 11vh !important;
       display: flex;
       flex-direction: row-reverse;
   }

  .gitHubImage {
   @include imageIcon;
 }

 .twitterImage {
   @include imageIcon;
 }

 .linkedInImage {
   @include imageIcon;
 }
 .portfolioDiv {
     position: relative;
    top: -1.4em;
    align-items: center;
    display: grid;
    width: 100%;
    color: #72a7b1;
    grid-template-columns: 30% 20% 50%;
 }

 .avatar-background {}
    
    .avatar {
        grid-column: 3/span 1;
        margin-left: 3px;
        width: 75px;
        border-radius: 50%;
        height: 70px;
        // background-image: url(./static/image/my-image.JPG);
        background-size: cover;
    }

    .titleSection {
        grid-column: 1/span 1;
    }

    .verticalSection {
        grid-column: 2/span 1;
        backdrop-filter: blueviolet;
        border-left: 10px;
        width: 52%;
        height: 100%;
        background: #1a499a;
        border-radius: 12px 12px 12px 14px;
    }
</style>

<div class="containerFluidDiv container-fluid" >
    <nav class="customNav navbar navbar-expand-lg navbar-dark bg-primary">
        <div class=" container-fluid navBarContainer">
            <ul class="headerIconUl navbar-nav"> 
                { #each MODELLIST as m }
                <li>
                   <div class="iconDivs">
                       <Button>
                        <img class="{m.class}" style="width: 3.4em;
                        position: relative;
                        top: 0.2em; filter:sepia(12%) contrast(144%) drop-shadow(2px 4px 6px gray);" 
                        src="{m.src}" alt="{m.altImageName}"/>
                    </Button>
                    </div>
                </li>
                {/each}
                
            </ul>
            <div class="portfolioDiv" id="portfolio">
                <section class="titleSection">
                  <!-- <h3>{headerObj['title']}</h3> -->
                </section>
                <section  class="verticalSection"></section>
                <section class="avatar"></section>
            </div>
        </div>
    
    </nav>
</div>    