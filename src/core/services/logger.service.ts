import { Injectable } from '@angular/core';
import { environment } from "@envs/environment"

const CONSOLE_DEBUG_METHOD = console['debug'] ? 'debug' : 'log';

/**
 * Use this method for replace console options at development mode.
 * To avoid show information to client at production mode.
 *
 * Methods:
 * @error Shows a error in console at development mode.
 * @warn Shows a warn in console at development mode.
 * @info Shows an info message in console at development mode.
 * @debug Start a debug option in console at development mode.
 * @log Shows a log message in console at development mode.
 */

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  /**
   * Shows a error in console at development mode.
   * @param message error message that u want show.
   * @param optionalParams optional parameters.
   */
  public error(message?: any, ...optionalParams: any[]): void {
    if (!environment.production) {
      console.error.apply(console, arguments);
    }
  }

  /**
   * Shows a warn in console at development mode.
   * @param message warn message that u want show.
   * @param optionalParams optional parameters.
   */
  public warn(message?: any, ...optionalParams: any[]): void {
    if (!environment.production) {
      console.warn.apply(console, arguments);
    }
  }

  /**
   * Shows an info message in console at development mode.
   * @param message info message that u want show.
   * @param optionalParams optional parameters.
   */
  public info(message?: any, ...optionalParams: any[]): void {
    if (!environment.production) {
      console.info.apply(console, arguments);
    }
  }

  /**
   * Start a debug option in console at development mode.
   * @param message debug message that u want show.
   * @param optionalParams debug parameters.
   */
  public debug(message?: any, ...optionalParams: any[]): void {
    if (!environment.production) {
      (<any>console)[CONSOLE_DEBUG_METHOD].apply(console, arguments);
    }
  }

  /**
   * Shows a log message in console at development mode.
   * @param message log message that u want show.
   * @param optionalParams optional parameters.
   */
  public log(message?: any, ...optionalParams: any[]): void {
    if (!environment.production) {
      console.log.apply(console, arguments);
    }
  }
}
