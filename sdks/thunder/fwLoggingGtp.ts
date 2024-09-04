// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class FwLoggingGtp extends pulumi.CustomResource {
    /**
     * Get an existing FwLoggingGtp resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FwLoggingGtpState, opts?: pulumi.CustomResourceOptions): FwLoggingGtp {
        return new FwLoggingGtp(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/fwLoggingGtp:FwLoggingGtp';

    /**
     * Returns true if the given object is an instance of FwLoggingGtp.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FwLoggingGtp {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === FwLoggingGtp.__pulumiType;
    }

    public readonly samplingEnables!: pulumi.Output<outputs.FwLoggingGtpSamplingEnable[] | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a FwLoggingGtp resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: FwLoggingGtpArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: FwLoggingGtpArgs | FwLoggingGtpState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as FwLoggingGtpState | undefined;
            resourceInputs["samplingEnables"] = state ? state.samplingEnables : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as FwLoggingGtpArgs | undefined;
            resourceInputs["samplingEnables"] = args ? args.samplingEnables : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(FwLoggingGtp.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering FwLoggingGtp resources.
 */
export interface FwLoggingGtpState {
    samplingEnables?: pulumi.Input<pulumi.Input<inputs.FwLoggingGtpSamplingEnable>[]>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a FwLoggingGtp resource.
 */
export interface FwLoggingGtpArgs {
    samplingEnables?: pulumi.Input<pulumi.Input<inputs.FwLoggingGtpSamplingEnable>[]>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
