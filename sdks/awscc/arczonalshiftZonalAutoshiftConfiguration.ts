// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ArczonalshiftZonalAutoshiftConfiguration extends pulumi.CustomResource {
    /**
     * Get an existing ArczonalshiftZonalAutoshiftConfiguration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ArczonalshiftZonalAutoshiftConfigurationState, opts?: pulumi.CustomResourceOptions): ArczonalshiftZonalAutoshiftConfiguration {
        return new ArczonalshiftZonalAutoshiftConfiguration(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/arczonalshiftZonalAutoshiftConfiguration:ArczonalshiftZonalAutoshiftConfiguration';

    /**
     * Returns true if the given object is an instance of ArczonalshiftZonalAutoshiftConfiguration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ArczonalshiftZonalAutoshiftConfiguration {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ArczonalshiftZonalAutoshiftConfiguration.__pulumiType;
    }

    public readonly practiceRunConfiguration!: pulumi.Output<outputs.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration>;
    public readonly resourceIdentifier!: pulumi.Output<string>;
    public readonly zonalAutoshiftStatus!: pulumi.Output<string>;

    /**
     * Create a ArczonalshiftZonalAutoshiftConfiguration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ArczonalshiftZonalAutoshiftConfigurationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ArczonalshiftZonalAutoshiftConfigurationArgs | ArczonalshiftZonalAutoshiftConfigurationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ArczonalshiftZonalAutoshiftConfigurationState | undefined;
            resourceInputs["practiceRunConfiguration"] = state ? state.practiceRunConfiguration : undefined;
            resourceInputs["resourceIdentifier"] = state ? state.resourceIdentifier : undefined;
            resourceInputs["zonalAutoshiftStatus"] = state ? state.zonalAutoshiftStatus : undefined;
        } else {
            const args = argsOrState as ArczonalshiftZonalAutoshiftConfigurationArgs | undefined;
            resourceInputs["practiceRunConfiguration"] = args ? args.practiceRunConfiguration : undefined;
            resourceInputs["resourceIdentifier"] = args ? args.resourceIdentifier : undefined;
            resourceInputs["zonalAutoshiftStatus"] = args ? args.zonalAutoshiftStatus : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ArczonalshiftZonalAutoshiftConfiguration.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ArczonalshiftZonalAutoshiftConfiguration resources.
 */
export interface ArczonalshiftZonalAutoshiftConfigurationState {
    practiceRunConfiguration?: pulumi.Input<inputs.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration>;
    resourceIdentifier?: pulumi.Input<string>;
    zonalAutoshiftStatus?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ArczonalshiftZonalAutoshiftConfiguration resource.
 */
export interface ArczonalshiftZonalAutoshiftConfigurationArgs {
    practiceRunConfiguration?: pulumi.Input<inputs.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration>;
    resourceIdentifier?: pulumi.Input<string>;
    zonalAutoshiftStatus?: pulumi.Input<string>;
}
