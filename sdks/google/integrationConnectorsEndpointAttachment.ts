// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class IntegrationConnectorsEndpointAttachment extends pulumi.CustomResource {
    /**
     * Get an existing IntegrationConnectorsEndpointAttachment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IntegrationConnectorsEndpointAttachmentState, opts?: pulumi.CustomResourceOptions): IntegrationConnectorsEndpointAttachment {
        return new IntegrationConnectorsEndpointAttachment(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google:index/integrationConnectorsEndpointAttachment:IntegrationConnectorsEndpointAttachment';

    /**
     * Returns true if the given object is an instance of IntegrationConnectorsEndpointAttachment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IntegrationConnectorsEndpointAttachment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IntegrationConnectorsEndpointAttachment.__pulumiType;
    }

    /**
     * Time the Namespace was created in UTC.
     */
    public /*out*/ readonly createTime!: pulumi.Output<string>;
    /**
     * Description of the resource.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    public /*out*/ readonly effectiveLabels!: pulumi.Output<{[key: string]: string}>;
    /**
     * Enable global access for endpoint attachment.
     */
    public readonly endpointGlobalAccess!: pulumi.Output<boolean | undefined>;
    /**
     * The Private Service Connect connection endpoint ip.
     */
    public /*out*/ readonly endpointIp!: pulumi.Output<string>;
    /**
     * Resource labels to represent user provided metadata. **Note**: This field is non-authoritative, and will only manage the
     * labels present in your configuration. Please refer to the field 'effective_labels' for all of the labels present on the
     * resource.
     */
    public readonly labels!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Location in which Endpoint Attachment needs to be created.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Name of Endpoint Attachment needs to be created.
     */
    public readonly name!: pulumi.Output<string>;
    public readonly project!: pulumi.Output<string>;
    /**
     * The path of the service attachment.
     */
    public readonly serviceAttachment!: pulumi.Output<string>;
    /**
     * The combination of labels configured directly on the resource and default labels configured on the provider.
     */
    public /*out*/ readonly terraformLabels!: pulumi.Output<{[key: string]: string}>;
    public readonly timeouts!: pulumi.Output<outputs.IntegrationConnectorsEndpointAttachmentTimeouts | undefined>;
    /**
     * Time the Namespace was updated in UTC.
     */
    public /*out*/ readonly updateTime!: pulumi.Output<string>;

    /**
     * Create a IntegrationConnectorsEndpointAttachment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IntegrationConnectorsEndpointAttachmentArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IntegrationConnectorsEndpointAttachmentArgs | IntegrationConnectorsEndpointAttachmentState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as IntegrationConnectorsEndpointAttachmentState | undefined;
            resourceInputs["createTime"] = state ? state.createTime : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["effectiveLabels"] = state ? state.effectiveLabels : undefined;
            resourceInputs["endpointGlobalAccess"] = state ? state.endpointGlobalAccess : undefined;
            resourceInputs["endpointIp"] = state ? state.endpointIp : undefined;
            resourceInputs["labels"] = state ? state.labels : undefined;
            resourceInputs["location"] = state ? state.location : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["serviceAttachment"] = state ? state.serviceAttachment : undefined;
            resourceInputs["terraformLabels"] = state ? state.terraformLabels : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["updateTime"] = state ? state.updateTime : undefined;
        } else {
            const args = argsOrState as IntegrationConnectorsEndpointAttachmentArgs | undefined;
            if ((!args || args.location === undefined) && !opts.urn) {
                throw new Error("Missing required property 'location'");
            }
            if ((!args || args.serviceAttachment === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceAttachment'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["endpointGlobalAccess"] = args ? args.endpointGlobalAccess : undefined;
            resourceInputs["labels"] = args ? args.labels : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["serviceAttachment"] = args ? args.serviceAttachment : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["createTime"] = undefined /*out*/;
            resourceInputs["effectiveLabels"] = undefined /*out*/;
            resourceInputs["endpointIp"] = undefined /*out*/;
            resourceInputs["terraformLabels"] = undefined /*out*/;
            resourceInputs["updateTime"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(IntegrationConnectorsEndpointAttachment.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering IntegrationConnectorsEndpointAttachment resources.
 */
export interface IntegrationConnectorsEndpointAttachmentState {
    /**
     * Time the Namespace was created in UTC.
     */
    createTime?: pulumi.Input<string>;
    /**
     * Description of the resource.
     */
    description?: pulumi.Input<string>;
    effectiveLabels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Enable global access for endpoint attachment.
     */
    endpointGlobalAccess?: pulumi.Input<boolean>;
    /**
     * The Private Service Connect connection endpoint ip.
     */
    endpointIp?: pulumi.Input<string>;
    /**
     * Resource labels to represent user provided metadata. **Note**: This field is non-authoritative, and will only manage the
     * labels present in your configuration. Please refer to the field 'effective_labels' for all of the labels present on the
     * resource.
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Location in which Endpoint Attachment needs to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Name of Endpoint Attachment needs to be created.
     */
    name?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    /**
     * The path of the service attachment.
     */
    serviceAttachment?: pulumi.Input<string>;
    /**
     * The combination of labels configured directly on the resource and default labels configured on the provider.
     */
    terraformLabels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.IntegrationConnectorsEndpointAttachmentTimeouts>;
    /**
     * Time the Namespace was updated in UTC.
     */
    updateTime?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a IntegrationConnectorsEndpointAttachment resource.
 */
export interface IntegrationConnectorsEndpointAttachmentArgs {
    /**
     * Description of the resource.
     */
    description?: pulumi.Input<string>;
    /**
     * Enable global access for endpoint attachment.
     */
    endpointGlobalAccess?: pulumi.Input<boolean>;
    /**
     * Resource labels to represent user provided metadata. **Note**: This field is non-authoritative, and will only manage the
     * labels present in your configuration. Please refer to the field 'effective_labels' for all of the labels present on the
     * resource.
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Location in which Endpoint Attachment needs to be created.
     */
    location: pulumi.Input<string>;
    /**
     * Name of Endpoint Attachment needs to be created.
     */
    name?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    /**
     * The path of the service attachment.
     */
    serviceAttachment: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.IntegrationConnectorsEndpointAttachmentTimeouts>;
}
