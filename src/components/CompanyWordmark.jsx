import React from 'react';
import CreativeWorkSolutionsLogo from './CreativeWorkSolutionsLogo';

/**
 * CompanyWordmark - Re-exports CreativeWorkSolutionsLogo for backward-compatibility
 * Features the horizontal 50% Blue (Top) / 50% White (Bottom) clipping across every character.
 */
export default function CompanyWordmark(props) {
  return <CreativeWorkSolutionsLogo {...props} />;
}
