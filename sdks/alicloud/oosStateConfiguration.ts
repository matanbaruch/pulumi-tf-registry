// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class OosStateConfiguration extends pulumi.CustomResource {
    /**
     * Get an existing OosStateConfiguration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: OosStateConfigurationState, opts?: pulumi.CustomResourceOptions): OosStateConfiguration {
        return new OosStateConfiguration(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'alicloud:index/oosStateConfiguration:OosStateConfiguration';

    /**
     * Returns true if the given object is an instance of OosStateConfiguration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is OosStateConfiguration {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === OosStateConfiguration.__pulumiType;
    }

    public readonly configureMode!: pulumi.Output<string>;
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly parameters!: pulumi.Output<string | undefined>;
    public readonly resourceGroupId!: pulumi.Output<string>;
    public readonly scheduleExpression!: pulumi.Output<string>;
    public readonly scheduleType!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly targets!: pulumi.Output<string>;
    public readonly templateName!: pulumi.Output<string>;
    public readonly templateVersion!: pulumi.Output<string>;

    /**
     * Create a OosStateConfiguration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OosStateConfigurationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: OosStateConfigurationArgs | OosStateConfigurationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as OosStateConfigurationState | undefined;
            resourceInputs["configureMode"] = state ? state.configureMode : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["parameters"] = state ? state.parameters : undefined;
            resourceInputs["resourceGroupId"] = state ? state.resourceGroupId : undefined;
            resourceInputs["scheduleExpression"] = state ? state.scheduleExpression : undefined;
            resourceInputs["scheduleType"] = state ? state.scheduleType : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["targets"] = state ? state.targets : undefined;
            resourceInputs["templateName"] = state ? state.templateName : undefined;
            resourceInputs["templateVersion"] = state ? state.templateVersion : undefined;
        } else {
            const args = argsOrState as OosStateConfigurationArgs | undefined;
            if ((!args || args.scheduleExpression === undefined) && !opts.urn) {
                throw new Error("Missing required property 'scheduleExpression'");
            }
            if ((!args || args.scheduleType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'scheduleType'");
            }
            if ((!args || args.targets === undefined) && !opts.urn) {
                throw new Error("Missing required property 'targets'");
            }
            if ((!args || args.templateName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'templateName'");
            }
            resourceInputs["configureMode"] = args ? args.configureMode : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["parameters"] = args ? args.parameters : undefined;
            resourceInputs["resourceGroupId"] = args ? args.resourceGroupId : undefined;
            resourceInputs["scheduleExpression"] = args ? args.scheduleExpression : undefined;
            resourceInputs["scheduleType"] = args ? args.scheduleType : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["targets"] = args ? args.targets : undefined;
            resourceInputs["templateName"] = args ? args.templateName : undefined;
            resourceInputs["templateVersion"] = args ? args.templateVersion : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(OosStateConfiguration.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering OosStateConfiguration resources.
 */
export interface OosStateConfigurationState {
    configureMode?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    parameters?: pulumi.Input<string>;
    resourceGroupId?: pulumi.Input<string>;
    scheduleExpression?: pulumi.Input<string>;
    scheduleType?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    targets?: pulumi.Input<string>;
    templateName?: pulumi.Input<string>;
    templateVersion?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a OosStateConfiguration resource.
 */
export interface OosStateConfigurationArgs {
    configureMode?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    parameters?: pulumi.Input<string>;
    resourceGroupId?: pulumi.Input<string>;
    scheduleExpression: pulumi.Input<string>;
    scheduleType: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    targets: pulumi.Input<string>;
    templateName: pulumi.Input<string>;
    templateVersion?: pulumi.Input<string>;
}
