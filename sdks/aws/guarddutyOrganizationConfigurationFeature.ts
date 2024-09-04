// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class GuarddutyOrganizationConfigurationFeature extends pulumi.CustomResource {
    /**
     * Get an existing GuarddutyOrganizationConfigurationFeature resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: GuarddutyOrganizationConfigurationFeatureState, opts?: pulumi.CustomResourceOptions): GuarddutyOrganizationConfigurationFeature {
        return new GuarddutyOrganizationConfigurationFeature(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/guarddutyOrganizationConfigurationFeature:GuarddutyOrganizationConfigurationFeature';

    /**
     * Returns true if the given object is an instance of GuarddutyOrganizationConfigurationFeature.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is GuarddutyOrganizationConfigurationFeature {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === GuarddutyOrganizationConfigurationFeature.__pulumiType;
    }

    public readonly additionalConfigurations!: pulumi.Output<outputs.GuarddutyOrganizationConfigurationFeatureAdditionalConfiguration[] | undefined>;
    public readonly autoEnable!: pulumi.Output<string>;
    public readonly detectorId!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;

    /**
     * Create a GuarddutyOrganizationConfigurationFeature resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GuarddutyOrganizationConfigurationFeatureArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: GuarddutyOrganizationConfigurationFeatureArgs | GuarddutyOrganizationConfigurationFeatureState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as GuarddutyOrganizationConfigurationFeatureState | undefined;
            resourceInputs["additionalConfigurations"] = state ? state.additionalConfigurations : undefined;
            resourceInputs["autoEnable"] = state ? state.autoEnable : undefined;
            resourceInputs["detectorId"] = state ? state.detectorId : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
        } else {
            const args = argsOrState as GuarddutyOrganizationConfigurationFeatureArgs | undefined;
            if ((!args || args.autoEnable === undefined) && !opts.urn) {
                throw new Error("Missing required property 'autoEnable'");
            }
            if ((!args || args.detectorId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'detectorId'");
            }
            resourceInputs["additionalConfigurations"] = args ? args.additionalConfigurations : undefined;
            resourceInputs["autoEnable"] = args ? args.autoEnable : undefined;
            resourceInputs["detectorId"] = args ? args.detectorId : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(GuarddutyOrganizationConfigurationFeature.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering GuarddutyOrganizationConfigurationFeature resources.
 */
export interface GuarddutyOrganizationConfigurationFeatureState {
    additionalConfigurations?: pulumi.Input<pulumi.Input<inputs.GuarddutyOrganizationConfigurationFeatureAdditionalConfiguration>[]>;
    autoEnable?: pulumi.Input<string>;
    detectorId?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a GuarddutyOrganizationConfigurationFeature resource.
 */
export interface GuarddutyOrganizationConfigurationFeatureArgs {
    additionalConfigurations?: pulumi.Input<pulumi.Input<inputs.GuarddutyOrganizationConfigurationFeatureAdditionalConfiguration>[]>;
    autoEnable: pulumi.Input<string>;
    detectorId: pulumi.Input<string>;
    name?: pulumi.Input<string>;
}
