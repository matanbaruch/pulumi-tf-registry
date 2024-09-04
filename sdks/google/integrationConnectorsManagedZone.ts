// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class IntegrationConnectorsManagedZone extends pulumi.CustomResource {
    /**
     * Get an existing IntegrationConnectorsManagedZone resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IntegrationConnectorsManagedZoneState, opts?: pulumi.CustomResourceOptions): IntegrationConnectorsManagedZone {
        return new IntegrationConnectorsManagedZone(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google:index/integrationConnectorsManagedZone:IntegrationConnectorsManagedZone';

    /**
     * Returns true if the given object is an instance of IntegrationConnectorsManagedZone.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IntegrationConnectorsManagedZone {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IntegrationConnectorsManagedZone.__pulumiType;
    }

    /**
     * Time the Namespace was created in UTC.
     */
    public /*out*/ readonly createTime!: pulumi.Output<string>;
    /**
     * Description of the resource.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * DNS Name of the resource.
     */
    public readonly dns!: pulumi.Output<string>;
    public /*out*/ readonly effectiveLabels!: pulumi.Output<{[key: string]: string}>;
    /**
     * Resource labels to represent user provided metadata. **Note**: This field is non-authoritative, and will only manage the
     * labels present in your configuration. Please refer to the field 'effective_labels' for all of the labels present on the
     * resource.
     */
    public readonly labels!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Name of Managed Zone needs to be created.
     */
    public readonly name!: pulumi.Output<string>;
    public readonly project!: pulumi.Output<string>;
    /**
     * The name of the Target Project.
     */
    public readonly targetProject!: pulumi.Output<string>;
    /**
     * The name of the Target Project VPC Network.
     */
    public readonly targetVpc!: pulumi.Output<string>;
    /**
     * The combination of labels configured directly on the resource and default labels configured on the provider.
     */
    public /*out*/ readonly terraformLabels!: pulumi.Output<{[key: string]: string}>;
    public readonly timeouts!: pulumi.Output<outputs.IntegrationConnectorsManagedZoneTimeouts | undefined>;
    /**
     * Time the Namespace was updated in UTC.
     */
    public /*out*/ readonly updateTime!: pulumi.Output<string>;

    /**
     * Create a IntegrationConnectorsManagedZone resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IntegrationConnectorsManagedZoneArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IntegrationConnectorsManagedZoneArgs | IntegrationConnectorsManagedZoneState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as IntegrationConnectorsManagedZoneState | undefined;
            resourceInputs["createTime"] = state ? state.createTime : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["dns"] = state ? state.dns : undefined;
            resourceInputs["effectiveLabels"] = state ? state.effectiveLabels : undefined;
            resourceInputs["labels"] = state ? state.labels : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["targetProject"] = state ? state.targetProject : undefined;
            resourceInputs["targetVpc"] = state ? state.targetVpc : undefined;
            resourceInputs["terraformLabels"] = state ? state.terraformLabels : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["updateTime"] = state ? state.updateTime : undefined;
        } else {
            const args = argsOrState as IntegrationConnectorsManagedZoneArgs | undefined;
            if ((!args || args.dns === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dns'");
            }
            if ((!args || args.targetProject === undefined) && !opts.urn) {
                throw new Error("Missing required property 'targetProject'");
            }
            if ((!args || args.targetVpc === undefined) && !opts.urn) {
                throw new Error("Missing required property 'targetVpc'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["dns"] = args ? args.dns : undefined;
            resourceInputs["labels"] = args ? args.labels : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["targetProject"] = args ? args.targetProject : undefined;
            resourceInputs["targetVpc"] = args ? args.targetVpc : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["createTime"] = undefined /*out*/;
            resourceInputs["effectiveLabels"] = undefined /*out*/;
            resourceInputs["terraformLabels"] = undefined /*out*/;
            resourceInputs["updateTime"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(IntegrationConnectorsManagedZone.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering IntegrationConnectorsManagedZone resources.
 */
export interface IntegrationConnectorsManagedZoneState {
    /**
     * Time the Namespace was created in UTC.
     */
    createTime?: pulumi.Input<string>;
    /**
     * Description of the resource.
     */
    description?: pulumi.Input<string>;
    /**
     * DNS Name of the resource.
     */
    dns?: pulumi.Input<string>;
    effectiveLabels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Resource labels to represent user provided metadata. **Note**: This field is non-authoritative, and will only manage the
     * labels present in your configuration. Please refer to the field 'effective_labels' for all of the labels present on the
     * resource.
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Name of Managed Zone needs to be created.
     */
    name?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    /**
     * The name of the Target Project.
     */
    targetProject?: pulumi.Input<string>;
    /**
     * The name of the Target Project VPC Network.
     */
    targetVpc?: pulumi.Input<string>;
    /**
     * The combination of labels configured directly on the resource and default labels configured on the provider.
     */
    terraformLabels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.IntegrationConnectorsManagedZoneTimeouts>;
    /**
     * Time the Namespace was updated in UTC.
     */
    updateTime?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a IntegrationConnectorsManagedZone resource.
 */
export interface IntegrationConnectorsManagedZoneArgs {
    /**
     * Description of the resource.
     */
    description?: pulumi.Input<string>;
    /**
     * DNS Name of the resource.
     */
    dns: pulumi.Input<string>;
    /**
     * Resource labels to represent user provided metadata. **Note**: This field is non-authoritative, and will only manage the
     * labels present in your configuration. Please refer to the field 'effective_labels' for all of the labels present on the
     * resource.
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Name of Managed Zone needs to be created.
     */
    name?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    /**
     * The name of the Target Project.
     */
    targetProject: pulumi.Input<string>;
    /**
     * The name of the Target Project VPC Network.
     */
    targetVpc: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.IntegrationConnectorsManagedZoneTimeouts>;
}
