// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class CloudServicesCloudProviderAzureLog extends pulumi.CustomResource {
    /**
     * Get an existing CloudServicesCloudProviderAzureLog resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CloudServicesCloudProviderAzureLogState, opts?: pulumi.CustomResourceOptions): CloudServicesCloudProviderAzureLog {
        return new CloudServicesCloudProviderAzureLog(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/cloudServicesCloudProviderAzureLog:CloudServicesCloudProviderAzureLog';

    /**
     * Returns true if the given object is an instance of CloudServicesCloudProviderAzureLog.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CloudServicesCloudProviderAzureLog {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CloudServicesCloudProviderAzureLog.__pulumiType;
    }

    /**
     * 'enable': Enable Azure Log Analytics Workspace; 'disable': Disable Azure Log Analytics Workspace (default);
     */
    public readonly action!: pulumi.Output<string | undefined>;
    /**
     * Specifies the thunder active partition name separated by a comma for multiple values
     */
    public readonly activePartitions!: pulumi.Output<string | undefined>;
    /**
     * Specifies the compute instance resource ID/Instance on which thunder is deployed
     */
    public readonly resourceId!: pulumi.Output<string | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;
    /**
     * Specifies the Azure Log Analytics Workspace ID
     */
    public readonly workspaceId!: pulumi.Output<string | undefined>;

    /**
     * Create a CloudServicesCloudProviderAzureLog resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: CloudServicesCloudProviderAzureLogArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CloudServicesCloudProviderAzureLogArgs | CloudServicesCloudProviderAzureLogState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CloudServicesCloudProviderAzureLogState | undefined;
            resourceInputs["action"] = state ? state.action : undefined;
            resourceInputs["activePartitions"] = state ? state.activePartitions : undefined;
            resourceInputs["resourceId"] = state ? state.resourceId : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
            resourceInputs["workspaceId"] = state ? state.workspaceId : undefined;
        } else {
            const args = argsOrState as CloudServicesCloudProviderAzureLogArgs | undefined;
            resourceInputs["action"] = args ? args.action : undefined;
            resourceInputs["activePartitions"] = args ? args.activePartitions : undefined;
            resourceInputs["resourceId"] = args ? args.resourceId : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
            resourceInputs["workspaceId"] = args ? args.workspaceId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CloudServicesCloudProviderAzureLog.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CloudServicesCloudProviderAzureLog resources.
 */
export interface CloudServicesCloudProviderAzureLogState {
    /**
     * 'enable': Enable Azure Log Analytics Workspace; 'disable': Disable Azure Log Analytics Workspace (default);
     */
    action?: pulumi.Input<string>;
    /**
     * Specifies the thunder active partition name separated by a comma for multiple values
     */
    activePartitions?: pulumi.Input<string>;
    /**
     * Specifies the compute instance resource ID/Instance on which thunder is deployed
     */
    resourceId?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
    /**
     * Specifies the Azure Log Analytics Workspace ID
     */
    workspaceId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a CloudServicesCloudProviderAzureLog resource.
 */
export interface CloudServicesCloudProviderAzureLogArgs {
    /**
     * 'enable': Enable Azure Log Analytics Workspace; 'disable': Disable Azure Log Analytics Workspace (default);
     */
    action?: pulumi.Input<string>;
    /**
     * Specifies the thunder active partition name separated by a comma for multiple values
     */
    activePartitions?: pulumi.Input<string>;
    /**
     * Specifies the compute instance resource ID/Instance on which thunder is deployed
     */
    resourceId?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
    /**
     * Specifies the Azure Log Analytics Workspace ID
     */
    workspaceId?: pulumi.Input<string>;
}
