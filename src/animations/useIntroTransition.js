import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useIntroTransition() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      gsap.set('.intro-star', { opacity: 0, scale: 0.35 });
      gsap.set('.intro-glow', { opacity: 0, scaleX: 0.55 });
      gsap.set('.intro-mountains', { opacity: 0, y: 30 });
      gsap.set('.intro-circle-path', { strokeDasharray: 1260, strokeDashoffset: 1260 });
      gsap.set('.intro-line', { scaleX: 0 });
      gsap.set('.intro-kicker', { opacity: 0, y: 18 });
      gsap.set('.intro-letter', { opacity: 0, yPercent: 105, rotateX: -45 });
      gsap.set('.intro-shine', { xPercent: -140, opacity: 0 });

      const introTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      introTl
        .to('.intro-star', {
          opacity: () => gsap.utils.random(0.35, 0.95),
          scale: 1,
          stagger: { each: 0.012, from: 'random' },
          duration: reduceMotion ? 0.01 : 0.9,
        })
        .to('.intro-glow', { opacity: 1, scaleX: 1, duration: reduceMotion ? 0.01 : 1.25 }, '-=0.2')
        .to('.intro-mountains', { opacity: 1, y: 0, duration: reduceMotion ? 0.01 : 1.1 }, '-=0.55')
        .to('.intro-circle-path', { strokeDashoffset: 0, duration: reduceMotion ? 0.01 : 1.55 }, '-=0.35')
        .to('.intro-line', { scaleX: 1, duration: reduceMotion ? 0.01 : 1.0, stagger: 0.08 }, '-=0.85')
        .to('.intro-kicker', { opacity: 1, y: 0, duration: reduceMotion ? 0.01 : 0.75 }, '-=0.45')
        .to(
          '.intro-letter',
          {
            opacity: 1,
            yPercent: 0,
            rotateX: 0,
            duration: reduceMotion ? 0.01 : 0.9,
            stagger: 0.045,
          },
          '-=0.25',
        )
        .to('.intro-shine', { opacity: 1, xPercent: 140, duration: reduceMotion ? 0.01 : 1.05 }, '+=0.05')
        .to({}, { duration: reduceMotion ? 0.01 : 0.4 });

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.intro',
          start: 'top top',
          end: '+=170%',
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      scrollTl
        .to('.intro-circle', { opacity: 0, scale: 0.78, ease: 'power2.inOut' }, 0)
        .to('.intro-mountains', { y: 120, opacity: 0.45, ease: 'none' }, 0)
        .to('.intro-lines', { opacity: 0, y: -20, ease: 'power2.out' }, 0)
        .to('.intro-title-wrap', { scale: 0.28, y: '-42vh', ease: 'power2.inOut' }, 0)
        .to('.intro-kicker', { opacity: 0, y: -22, ease: 'power2.out' }, 0.04)
        .to('.intro', { backgroundColor: 'rgba(2, 6, 13, 0)', ease: 'none' }, 0.12)
        .fromTo('.hero-media', { opacity: 0, scale: 1.2 }, { opacity: 1, scale: 1, ease: 'power2.out' }, 0.05)
        .fromTo('.nav', { y: -88, opacity: 0 }, { y: 0, opacity: 1, ease: 'power3.out' }, 0.42)
        .to('.intro-stage', { opacity: 0, ease: 'power2.inOut' }, 0.72);

      gsap.to('.hero-video', {
        scale: 1.08,
        yPercent: -5,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      gsap.utils.toArray('[data-reveal]').forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 82%',
              once: true,
            },
          },
        );
      });
    });

    return () => ctx.revert();
  }, []);
}
