import * as adobeXd from "/public/assets/svgs/skills/adobe-xd.svg";
import adobeaudition from "/public/assets/svgs/skills/adobeaudition.svg";
import afterEffects from "/public/assets/svgs/skills/after-effects.svg";
import angular from "/public/assets/svgs/skills/angular.svg";
import aws from "/public/assets/svgs/skills/aws.svg";
import azure from "/public/assets/svgs/skills/azure.svg";
import blender from "/public/assets/svgs/skills/blender.svg";
import bootstrap from "/public/assets/svgs/skills/bootstrap.svg";
import bulma from "/public/assets/svgs/skills/bulma.svg";
import c from "/public/assets/svgs/skills/c.svg";
import canva from "/public/assets/svgs/skills/canva.svg";
import capacitorjs from "/public/assets/svgs/skills/capacitorjs.svg";
import coffeescript from "/public/assets/svgs/skills/coffeescript.svg";
import cplusplus from "/public/assets/svgs/skills/cplusplus.svg";
import csharp from "/public/assets/svgs/skills/csharp.svg";
import css from "/public/assets/svgs/skills/css.svg";
import dart from "/public/assets/svgs/skills/dart.svg";
import deno from "/public/assets/svgs/skills/deno.svg";
import django from "/public/assets/svgs/skills/django.svg";
import docker from "/public/assets/svgs/skills/docker.svg";
import fastify from "/public/assets/svgs/skills/fastify.svg";
import figma from "/public/assets/svgs/skills/figma.svg";
import firebase from "/public/assets/svgs/skills/firebase.svg";
import flutter from "/public/assets/svgs/skills/flutter.svg";
import gcp from "/public/assets/svgs/skills/gcp.svg";
import gimp from "/public/assets/svgs/skills/gimp.svg";
import git from "/public/assets/svgs/skills/git.svg";
import go from "/public/assets/svgs/skills/go.svg";
import graphql from "/public/assets/svgs/skills/graphql.svg";
import haxe from "/public/assets/svgs/skills/haxe.svg";
import html from "/public/assets/svgs/skills/html.svg";
import illustrator from "/public/assets/svgs/skills/illustrator.svg";
import ionic from "/public/assets/svgs/skills/ionic.svg";
import java from "/public/assets/svgs/skills/java.svg";
import javascript from "/public/assets/svgs/skills/javascript.svg";
import julia from "/public/assets/svgs/skills/julia.svg";
import kotlin from "/public/assets/svgs/skills/kotlin.svg";
import lightroom from "/public/assets/svgs/skills/lightroom.svg";
import markdown from "/public/assets/svgs/skills/markdown.svg";
import materialui from "/public/assets/svgs/skills/materialui.svg";
import nextui from "/public/assets/svgs/skills/nextui.svg";
import antdesign from "/public/assets/svgs/skills/antdesign.svg";
import matlab from "/public/assets/svgs/skills/matlab.svg";
import memsql from "/public/assets/svgs/skills/memsql.svg";
import microsoftoffice from "/public/assets/svgs/skills/microsoftoffice.svg";
import mongoDB from "/public/assets/svgs/skills/mongoDB.svg";
import mysql from "/public/assets/svgs/skills/mysql.svg";
import nextJS from "/public/assets/svgs/skills/nextJS.svg";
import nodeJS from "/public/assets/svgs/skills/nodeJs.svg";
import nginx from "/public/assets/svgs/skills/nginx.svg";
import numpy from "/public/assets/svgs/skills/numpy.svg";
import nuxtJS from "/public/assets/svgs/skills/nuxtJS.svg";
import opencv from "/public/assets/svgs/skills/opencv.svg";
import photoshop from "/public/assets/svgs/skills/photoshop.svg";
import php from "/public/assets/svgs/skills/php.svg";
import picsart from "/public/assets/svgs/skills/picsart.svg";
import postgresql from "/public/assets/svgs/skills/postgresql.svg";
import premierepro from "/public/assets/svgs/skills/premierepro.svg";
import python from "/public/assets/svgs/skills/python.svg";
import pytorch from "/public/assets/svgs/skills/pytorch.svg";
import react from "/public/assets/svgs/skills/react.svg";
import ruby from "/public/assets/svgs/skills/ruby.svg";
import selenium from "/public/assets/svgs/skills/selenium.svg";
import sketch from "/public/assets/svgs/skills/sketch.svg";
import strapi from "/public/assets/svgs/skills/strapi.svg";
import svelte from "/public/assets/svgs/skills/svelte.svg";
import swift from "/public/assets/svgs/skills/swift.svg";
import tailwind from "/public/assets/svgs/skills/tailwind.svg";
import tensorflow from "/public/assets/svgs/skills/tensorflow.svg";
import typescript from "/public/assets/svgs/skills/typescript.svg";
import unity from "/public/assets/svgs/skills/unity.svg";
import vitejs from "/public/assets/svgs/skills/vitejs.svg";
import vue from "/public/assets/svgs/skills/vue.svg";
import vuetifyjs from "/public/assets/svgs/skills/vuetifyjs.svg";
import webix from "/public/assets/svgs/skills/webix.svg";
import wolframalpha from "/public/assets/svgs/skills/wolframalpha.svg";
import wordpress from "/public/assets/svgs/skills/wordpress.svg";

export const skillsImage = (skill: string) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "gcp":
      return gcp;
    case "html":
      return html;
    case "photoshop":
      return photoshop;
    case "docker":
      return docker;
    case "illustrator":
      return illustrator;
    case "adobe xd":
      return adobeXd;
    case "after effects":
      return afterEffects;
    case "css":
      return css;
    case "angular":
      return angular;
    case "javascript":
      return javascript;
    case "nextjs":
      return nextJS;
    case "nodejs":
      return nodeJS;
    case "nuxtjs":
      return nuxtJS;
    case "reactjs":
      return react;
    case "svelte":
      return svelte;
    case "typescript":
      return typescript;
    case "vue":
      return vue;
    case "bootstrap":
      return bootstrap;
    case "bulma":
      return bulma;
    case "capacitorjs":
      return capacitorjs;
    case "coffeescript":
      return coffeescript;
    case "memsql":
      return memsql;
    case "mongodb":
      return mongoDB;
    case "mysql":
      return mysql;
    case "postgresql":
      return postgresql;
    case "tailwind":
      return tailwind;
    case "vitejs":
      return vitejs;
    case "vuetifyjs":
      return vuetifyjs;
    case "c":
      return c;
    case "c++":
      return cplusplus;
    case "c#":
      return csharp;
    case "dart":
      return dart;
    case "go":
      return go;
    case "java":
      return java;
    case "kotlin":
      return kotlin;
    case "julia":
      return julia;
    case "matlab":
      return matlab;
    case "php":
      return php;
    case "python":
      return python;
    case "ruby":
      return ruby;
    case "swift":
      return swift;
    case "adobe audition":
      return adobeaudition;
    case "aws":
      return aws;
    case "deno":
      return deno;
    case "django":
      return django;
    case "firebase":
      return firebase;
    case "gimp":
      return gimp;
    case "git":
      return git;
    case "graphql":
      return graphql;
    case "lightroom":
      return lightroom;
    case "materialui":
      return materialui;
    case "antdesign":
      return antdesign;
    case "nextui":
      return nextui;
    case "nginx":
      return nginx;
    case "numpy":
      return numpy;
    case "opencv":
      return opencv;
    case "premiere pro":
      return premierepro;
    case "pytorch":
      return pytorch;
    case "selenium":
      return selenium;
    case "strapi":
      return strapi;
    case "tensorflow":
      return tensorflow;
    case "webix":
      return webix;
    case "wordpress":
      return wordpress;
    case "azure":
      return azure;
    case "blender":
      return blender;
    case "fastify":
      return fastify;
    case "figma":
      return figma;
    case "flutter":
      return flutter;
    case "haxe":
      return haxe;
    case "ionic":
      return ionic;
    case "markdown":
      return markdown;
    case "microsoft office":
      return microsoftoffice;
    case "picsart":
      return picsart;
    case "sketch":
      return sketch;
    case "unity":
      return unity;
    case "wolframalpha":
      return wolframalpha;
    case "canva":
      return canva;
    default:
      break;
  }
};
