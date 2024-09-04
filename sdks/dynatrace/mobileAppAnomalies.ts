// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class MobileAppAnomalies extends pulumi.CustomResource {
    /**
     * Get an existing MobileAppAnomalies resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MobileAppAnomaliesState, opts?: pulumi.CustomResourceOptions): MobileAppAnomalies {
        return new MobileAppAnomalies(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'dynatrace:index/mobileAppAnomalies:MobileAppAnomalies';

    /**
     * Returns true if the given object is an instance of MobileAppAnomalies.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MobileAppAnomalies {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MobileAppAnomalies.__pulumiType;
    }

    /**
     * Error rate increase
     */
    public readonly errorRateIncrease!: pulumi.Output<outputs.MobileAppAnomaliesErrorRateIncrease>;
    /**
     * The scope of this setting (DEVICE_APPLICATION_METHOD, MOBILE_APPLICATION). Omit this property if you want to cover the
     * whole environment.
     */
    public readonly scope!: pulumi.Output<string | undefined>;
    /**
     * Slow user actions
     */
    public readonly slowUserActions!: pulumi.Output<outputs.MobileAppAnomaliesSlowUserActions>;
    /**
     * Unexpected high load
     */
    public readonly unexpectedHighLoad!: pulumi.Output<outputs.MobileAppAnomaliesUnexpectedHighLoad>;
    /**
     * Unexpected low load
     */
    public readonly unexpectedLowLoad!: pulumi.Output<outputs.MobileAppAnomaliesUnexpectedLowLoad>;

    /**
     * Create a MobileAppAnomalies resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MobileAppAnomaliesArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MobileAppAnomaliesArgs | MobileAppAnomaliesState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MobileAppAnomaliesState | undefined;
            resourceInputs["errorRateIncrease"] = state ? state.errorRateIncrease : undefined;
            resourceInputs["scope"] = state ? state.scope : undefined;
            resourceInputs["slowUserActions"] = state ? state.slowUserActions : undefined;
            resourceInputs["unexpectedHighLoad"] = state ? state.unexpectedHighLoad : undefined;
            resourceInputs["unexpectedLowLoad"] = state ? state.unexpectedLowLoad : undefined;
        } else {
            const args = argsOrState as MobileAppAnomaliesArgs | undefined;
            if ((!args || args.errorRateIncrease === undefined) && !opts.urn) {
                throw new Error("Missing required property 'errorRateIncrease'");
            }
            if ((!args || args.slowUserActions === undefined) && !opts.urn) {
                throw new Error("Missing required property 'slowUserActions'");
            }
            if ((!args || args.unexpectedHighLoad === undefined) && !opts.urn) {
                throw new Error("Missing required property 'unexpectedHighLoad'");
            }
            if ((!args || args.unexpectedLowLoad === undefined) && !opts.urn) {
                throw new Error("Missing required property 'unexpectedLowLoad'");
            }
            resourceInputs["errorRateIncrease"] = args ? args.errorRateIncrease : undefined;
            resourceInputs["scope"] = args ? args.scope : undefined;
            resourceInputs["slowUserActions"] = args ? args.slowUserActions : undefined;
            resourceInputs["unexpectedHighLoad"] = args ? args.unexpectedHighLoad : undefined;
            resourceInputs["unexpectedLowLoad"] = args ? args.unexpectedLowLoad : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(MobileAppAnomalies.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering MobileAppAnomalies resources.
 */
export interface MobileAppAnomaliesState {
    /**
     * Error rate increase
     */
    errorRateIncrease?: pulumi.Input<inputs.MobileAppAnomaliesErrorRateIncrease>;
    /**
     * The scope of this setting (DEVICE_APPLICATION_METHOD, MOBILE_APPLICATION). Omit this property if you want to cover the
     * whole environment.
     */
    scope?: pulumi.Input<string>;
    /**
     * Slow user actions
     */
    slowUserActions?: pulumi.Input<inputs.MobileAppAnomaliesSlowUserActions>;
    /**
     * Unexpected high load
     */
    unexpectedHighLoad?: pulumi.Input<inputs.MobileAppAnomaliesUnexpectedHighLoad>;
    /**
     * Unexpected low load
     */
    unexpectedLowLoad?: pulumi.Input<inputs.MobileAppAnomaliesUnexpectedLowLoad>;
}

/**
 * The set of arguments for constructing a MobileAppAnomalies resource.
 */
export interface MobileAppAnomaliesArgs {
    /**
     * Error rate increase
     */
    errorRateIncrease: pulumi.Input<inputs.MobileAppAnomaliesErrorRateIncrease>;
    /**
     * The scope of this setting (DEVICE_APPLICATION_METHOD, MOBILE_APPLICATION). Omit this property if you want to cover the
     * whole environment.
     */
    scope?: pulumi.Input<string>;
    /**
     * Slow user actions
     */
    slowUserActions: pulumi.Input<inputs.MobileAppAnomaliesSlowUserActions>;
    /**
     * Unexpected high load
     */
    unexpectedHighLoad: pulumi.Input<inputs.MobileAppAnomaliesUnexpectedHighLoad>;
    /**
     * Unexpected low load
     */
    unexpectedLowLoad: pulumi.Input<inputs.MobileAppAnomaliesUnexpectedLowLoad>;
}
