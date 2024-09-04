// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class NotificationTemplate extends pulumi.CustomResource {
    /**
     * Get an existing NotificationTemplate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NotificationTemplateState, opts?: pulumi.CustomResourceOptions): NotificationTemplate {
        return new NotificationTemplate(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'prismacloud:index/notificationTemplate:NotificationTemplate';

    /**
     * Returns true if the given object is an instance of NotificationTemplate.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NotificationTemplate {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NotificationTemplate.__pulumiType;
    }

    /**
     * createdBy
     */
    public /*out*/ readonly createdBy!: pulumi.Output<string>;
    /**
     * createdTs
     */
    public /*out*/ readonly createdTs!: pulumi.Output<number>;
    /**
     * customerId
     */
    public /*out*/ readonly customerId!: pulumi.Output<number>;
    /**
     * enabled
     */
    public readonly enabled!: pulumi.Output<boolean>;
    /**
     * integrationId
     */
    public readonly integrationId!: pulumi.Output<string>;
    /**
     * integrationName
     */
    public /*out*/ readonly integrationName!: pulumi.Output<string>;
    /**
     * integrationType
     */
    public readonly integrationType!: pulumi.Output<string>;
    /**
     * lastModifiedBy
     */
    public /*out*/ readonly lastModifiedBy!: pulumi.Output<string>;
    /**
     * lastModifiedTs
     */
    public /*out*/ readonly lastModifiedTs!: pulumi.Output<number>;
    /**
     * module
     */
    public /*out*/ readonly module!: pulumi.Output<string>;
    /**
     * name
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * List of template_config
     */
    public readonly templateConfigs!: pulumi.Output<outputs.NotificationTemplateTemplateConfig[]>;
    /**
     * templateType
     */
    public readonly templateType!: pulumi.Output<string>;

    /**
     * Create a NotificationTemplate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NotificationTemplateArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NotificationTemplateArgs | NotificationTemplateState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NotificationTemplateState | undefined;
            resourceInputs["createdBy"] = state ? state.createdBy : undefined;
            resourceInputs["createdTs"] = state ? state.createdTs : undefined;
            resourceInputs["customerId"] = state ? state.customerId : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["integrationId"] = state ? state.integrationId : undefined;
            resourceInputs["integrationName"] = state ? state.integrationName : undefined;
            resourceInputs["integrationType"] = state ? state.integrationType : undefined;
            resourceInputs["lastModifiedBy"] = state ? state.lastModifiedBy : undefined;
            resourceInputs["lastModifiedTs"] = state ? state.lastModifiedTs : undefined;
            resourceInputs["module"] = state ? state.module : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["templateConfigs"] = state ? state.templateConfigs : undefined;
            resourceInputs["templateType"] = state ? state.templateType : undefined;
        } else {
            const args = argsOrState as NotificationTemplateArgs | undefined;
            if ((!args || args.integrationType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'integrationType'");
            }
            if ((!args || args.templateConfigs === undefined) && !opts.urn) {
                throw new Error("Missing required property 'templateConfigs'");
            }
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["integrationId"] = args ? args.integrationId : undefined;
            resourceInputs["integrationType"] = args ? args.integrationType : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["templateConfigs"] = args ? args.templateConfigs : undefined;
            resourceInputs["templateType"] = args ? args.templateType : undefined;
            resourceInputs["createdBy"] = undefined /*out*/;
            resourceInputs["createdTs"] = undefined /*out*/;
            resourceInputs["customerId"] = undefined /*out*/;
            resourceInputs["integrationName"] = undefined /*out*/;
            resourceInputs["lastModifiedBy"] = undefined /*out*/;
            resourceInputs["lastModifiedTs"] = undefined /*out*/;
            resourceInputs["module"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(NotificationTemplate.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering NotificationTemplate resources.
 */
export interface NotificationTemplateState {
    /**
     * createdBy
     */
    createdBy?: pulumi.Input<string>;
    /**
     * createdTs
     */
    createdTs?: pulumi.Input<number>;
    /**
     * customerId
     */
    customerId?: pulumi.Input<number>;
    /**
     * enabled
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * integrationId
     */
    integrationId?: pulumi.Input<string>;
    /**
     * integrationName
     */
    integrationName?: pulumi.Input<string>;
    /**
     * integrationType
     */
    integrationType?: pulumi.Input<string>;
    /**
     * lastModifiedBy
     */
    lastModifiedBy?: pulumi.Input<string>;
    /**
     * lastModifiedTs
     */
    lastModifiedTs?: pulumi.Input<number>;
    /**
     * module
     */
    module?: pulumi.Input<string>;
    /**
     * name
     */
    name?: pulumi.Input<string>;
    /**
     * List of template_config
     */
    templateConfigs?: pulumi.Input<pulumi.Input<inputs.NotificationTemplateTemplateConfig>[]>;
    /**
     * templateType
     */
    templateType?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a NotificationTemplate resource.
 */
export interface NotificationTemplateArgs {
    /**
     * enabled
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * integrationId
     */
    integrationId?: pulumi.Input<string>;
    /**
     * integrationType
     */
    integrationType: pulumi.Input<string>;
    /**
     * name
     */
    name?: pulumi.Input<string>;
    /**
     * List of template_config
     */
    templateConfigs: pulumi.Input<pulumi.Input<inputs.NotificationTemplateTemplateConfig>[]>;
    /**
     * templateType
     */
    templateType?: pulumi.Input<string>;
}
