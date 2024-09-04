// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class CseInsightsConfiguration extends pulumi.CustomResource {
    /**
     * Get an existing CseInsightsConfiguration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CseInsightsConfigurationState, opts?: pulumi.CustomResourceOptions): CseInsightsConfiguration {
        return new CseInsightsConfiguration(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'sumologic:index/cseInsightsConfiguration:CseInsightsConfiguration';

    /**
     * Returns true if the given object is an instance of CseInsightsConfiguration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CseInsightsConfiguration {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CseInsightsConfiguration.__pulumiType;
    }

    public readonly globalSignalSuppressionWindow!: pulumi.Output<number | undefined>;
    public readonly lookbackDays!: pulumi.Output<number | undefined>;
    public readonly threshold!: pulumi.Output<number | undefined>;

    /**
     * Create a CseInsightsConfiguration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: CseInsightsConfigurationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CseInsightsConfigurationArgs | CseInsightsConfigurationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CseInsightsConfigurationState | undefined;
            resourceInputs["globalSignalSuppressionWindow"] = state ? state.globalSignalSuppressionWindow : undefined;
            resourceInputs["lookbackDays"] = state ? state.lookbackDays : undefined;
            resourceInputs["threshold"] = state ? state.threshold : undefined;
        } else {
            const args = argsOrState as CseInsightsConfigurationArgs | undefined;
            resourceInputs["globalSignalSuppressionWindow"] = args ? args.globalSignalSuppressionWindow : undefined;
            resourceInputs["lookbackDays"] = args ? args.lookbackDays : undefined;
            resourceInputs["threshold"] = args ? args.threshold : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CseInsightsConfiguration.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CseInsightsConfiguration resources.
 */
export interface CseInsightsConfigurationState {
    globalSignalSuppressionWindow?: pulumi.Input<number>;
    lookbackDays?: pulumi.Input<number>;
    threshold?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a CseInsightsConfiguration resource.
 */
export interface CseInsightsConfigurationArgs {
    globalSignalSuppressionWindow?: pulumi.Input<number>;
    lookbackDays?: pulumi.Input<number>;
    threshold?: pulumi.Input<number>;
}
