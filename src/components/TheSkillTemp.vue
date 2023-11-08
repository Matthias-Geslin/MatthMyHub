<script setup>
defineProps(['skillName', 'skillPercent'])
</script>

<template>
   <div class="box">
      <ul>
         <li>
            <div class="lang">{{ skillName }}
               <div class="bar">
                  <div class="progress">
                     <span class="percent">{{ skillPercent }}</span>
                  </div>
               </div>
            </div>
         </li>
      </ul>
   </div>
</template>