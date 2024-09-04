// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SyslogParams extends pulumi.CustomResource {
    /**
     * Get an existing SyslogParams resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SyslogParamsState, opts?: pulumi.CustomResourceOptions): SyslogParams {
        return new SyslogParams(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'netscalersdx:index/syslogParams:SyslogParams';

    /**
     * Returns true if the given object is an instance of SyslogParams.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SyslogParams {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SyslogParams.__pulumiType;
    }

    /**
     * Format of date to be added in the syslog message.
     */
    public readonly dateFormat!: pulumi.Output<string | undefined>;
    /**
     * Timezone to be used in the syslog message.
     */
    public readonly timezone!: pulumi.Output<string | undefined>;

    /**
     * Create a SyslogParams resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SyslogParamsArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SyslogParamsArgs | SyslogParamsState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SyslogParamsState | undefined;
            resourceInputs["dateFormat"] = state ? state.dateFormat : undefined;
            resourceInputs["timezone"] = state ? state.timezone : undefined;
        } else {
            const args = argsOrState as SyslogParamsArgs | undefined;
            resourceInputs["dateFormat"] = args ? args.dateFormat : undefined;
            resourceInputs["timezone"] = args ? args.timezone : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SyslogParams.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SyslogParams resources.
 */
export interface SyslogParamsState {
    /**
     * Format of date to be added in the syslog message.
     */
    dateFormat?: pulumi.Input<string>;
    /**
     * Timezone to be used in the syslog message.
     */
    timezone?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SyslogParams resource.
 */
export interface SyslogParamsArgs {
    /**
     * Format of date to be added in the syslog message.
     */
    dateFormat?: pulumi.Input<string>;
    /**
     * Timezone to be used in the syslog message.
     */
    timezone?: pulumi.Input<string>;
}
