// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SyslogServer extends pulumi.CustomResource {
    /**
     * Get an existing SyslogServer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SyslogServerState, opts?: pulumi.CustomResourceOptions): SyslogServer {
        return new SyslogServer(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'netscalersdx:index/syslogServer:SyslogServer';

    /**
     * Returns true if the given object is an instance of SyslogServer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SyslogServer {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SyslogServer.__pulumiType;
    }

    /**
     * Syslog server IP address. Minimum length = 1 Maximum length = 64
     */
    public readonly ipAddress!: pulumi.Output<string>;
    /**
     * Send logs of all levels to this syslog server.
     */
    public readonly logLevelAll!: pulumi.Output<boolean | undefined>;
    /**
     * Send logs of level critical to this syslog server.
     */
    public readonly logLevelCritical!: pulumi.Output<boolean | undefined>;
    /**
     * Send logs of level error to this syslog server.
     */
    public readonly logLevelError!: pulumi.Output<boolean | undefined>;
    /**
     * Send logs of level info to this syslog server.
     */
    public readonly logLevelInfo!: pulumi.Output<boolean | undefined>;
    /**
     * Send no logs to this syslog server.
     */
    public readonly logLevelNone!: pulumi.Output<boolean | undefined>;
    /**
     * Send logs of level warning to this syslog server.
     */
    public readonly logLevelWarning!: pulumi.Output<boolean | undefined>;
    /**
     * Syslog server name. Minimum length = 1 Maximum length = 128
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Syslog server port. Maximum value =
     */
    public readonly port!: pulumi.Output<number>;

    /**
     * Create a SyslogServer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SyslogServerArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SyslogServerArgs | SyslogServerState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SyslogServerState | undefined;
            resourceInputs["ipAddress"] = state ? state.ipAddress : undefined;
            resourceInputs["logLevelAll"] = state ? state.logLevelAll : undefined;
            resourceInputs["logLevelCritical"] = state ? state.logLevelCritical : undefined;
            resourceInputs["logLevelError"] = state ? state.logLevelError : undefined;
            resourceInputs["logLevelInfo"] = state ? state.logLevelInfo : undefined;
            resourceInputs["logLevelNone"] = state ? state.logLevelNone : undefined;
            resourceInputs["logLevelWarning"] = state ? state.logLevelWarning : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["port"] = state ? state.port : undefined;
        } else {
            const args = argsOrState as SyslogServerArgs | undefined;
            if ((!args || args.ipAddress === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ipAddress'");
            }
            if ((!args || args.port === undefined) && !opts.urn) {
                throw new Error("Missing required property 'port'");
            }
            resourceInputs["ipAddress"] = args ? args.ipAddress : undefined;
            resourceInputs["logLevelAll"] = args ? args.logLevelAll : undefined;
            resourceInputs["logLevelCritical"] = args ? args.logLevelCritical : undefined;
            resourceInputs["logLevelError"] = args ? args.logLevelError : undefined;
            resourceInputs["logLevelInfo"] = args ? args.logLevelInfo : undefined;
            resourceInputs["logLevelNone"] = args ? args.logLevelNone : undefined;
            resourceInputs["logLevelWarning"] = args ? args.logLevelWarning : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["port"] = args ? args.port : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SyslogServer.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SyslogServer resources.
 */
export interface SyslogServerState {
    /**
     * Syslog server IP address. Minimum length = 1 Maximum length = 64
     */
    ipAddress?: pulumi.Input<string>;
    /**
     * Send logs of all levels to this syslog server.
     */
    logLevelAll?: pulumi.Input<boolean>;
    /**
     * Send logs of level critical to this syslog server.
     */
    logLevelCritical?: pulumi.Input<boolean>;
    /**
     * Send logs of level error to this syslog server.
     */
    logLevelError?: pulumi.Input<boolean>;
    /**
     * Send logs of level info to this syslog server.
     */
    logLevelInfo?: pulumi.Input<boolean>;
    /**
     * Send no logs to this syslog server.
     */
    logLevelNone?: pulumi.Input<boolean>;
    /**
     * Send logs of level warning to this syslog server.
     */
    logLevelWarning?: pulumi.Input<boolean>;
    /**
     * Syslog server name. Minimum length = 1 Maximum length = 128
     */
    name?: pulumi.Input<string>;
    /**
     * Syslog server port. Maximum value =
     */
    port?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a SyslogServer resource.
 */
export interface SyslogServerArgs {
    /**
     * Syslog server IP address. Minimum length = 1 Maximum length = 64
     */
    ipAddress: pulumi.Input<string>;
    /**
     * Send logs of all levels to this syslog server.
     */
    logLevelAll?: pulumi.Input<boolean>;
    /**
     * Send logs of level critical to this syslog server.
     */
    logLevelCritical?: pulumi.Input<boolean>;
    /**
     * Send logs of level error to this syslog server.
     */
    logLevelError?: pulumi.Input<boolean>;
    /**
     * Send logs of level info to this syslog server.
     */
    logLevelInfo?: pulumi.Input<boolean>;
    /**
     * Send no logs to this syslog server.
     */
    logLevelNone?: pulumi.Input<boolean>;
    /**
     * Send logs of level warning to this syslog server.
     */
    logLevelWarning?: pulumi.Input<boolean>;
    /**
     * Syslog server name. Minimum length = 1 Maximum length = 128
     */
    name?: pulumi.Input<string>;
    /**
     * Syslog server port. Maximum value =
     */
    port: pulumi.Input<number>;
}
