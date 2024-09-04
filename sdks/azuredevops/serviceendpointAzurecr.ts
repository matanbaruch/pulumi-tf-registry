// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ServiceendpointAzurecr extends pulumi.CustomResource {
    /**
     * Get an existing ServiceendpointAzurecr resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ServiceendpointAzurecrState, opts?: pulumi.CustomResourceOptions): ServiceendpointAzurecr {
        return new ServiceendpointAzurecr(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azuredevops:index/serviceendpointAzurecr:ServiceendpointAzurecr';

    /**
     * Returns true if the given object is an instance of ServiceendpointAzurecr.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ServiceendpointAzurecr {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ServiceendpointAzurecr.__pulumiType;
    }

    public /*out*/ readonly appObjectId!: pulumi.Output<string>;
    public readonly authorization!: pulumi.Output<{[key: string]: string}>;
    public /*out*/ readonly azSpnRoleAssignmentId!: pulumi.Output<string>;
    public /*out*/ readonly azSpnRolePermissions!: pulumi.Output<string>;
    /**
     * The AzureContainerRegistry registry which should be used.
     */
    public readonly azurecrName!: pulumi.Output<string>;
    /**
     * The service principal tenant id which should be used.
     */
    public readonly azurecrSpnTenantid!: pulumi.Output<string>;
    /**
     * The Azure subscription Id which should be used.
     */
    public readonly azurecrSubscriptionId!: pulumi.Output<string>;
    /**
     * The Azure subscription name which should be used.
     */
    public readonly azurecrSubscriptionName!: pulumi.Output<string>;
    public readonly credentials!: pulumi.Output<outputs.ServiceendpointAzurecrCredentials | undefined>;
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly projectId!: pulumi.Output<string>;
    /**
     * Scope Resource Group
     */
    public readonly resourceGroup!: pulumi.Output<string | undefined>;
    /**
     * The AzureCR Service Endpoint Authentication Scheme, this can be 'WorkloadIdentityFederation', 'ManagedServiceIdentity'
     * or 'ServicePrincipal'.
     */
    public readonly serviceEndpointAuthenticationScheme!: pulumi.Output<string | undefined>;
    public readonly serviceEndpointName!: pulumi.Output<string>;
    public /*out*/ readonly servicePrincipalId!: pulumi.Output<string>;
    public /*out*/ readonly spnObjectId!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.ServiceendpointAzurecrTimeouts | undefined>;
    /**
     * The issuer of the workload identity federation service principal.
     */
    public /*out*/ readonly workloadIdentityFederationIssuer!: pulumi.Output<string>;
    /**
     * The subject of the workload identity federation service principal.
     */
    public /*out*/ readonly workloadIdentityFederationSubject!: pulumi.Output<string>;

    /**
     * Create a ServiceendpointAzurecr resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServiceendpointAzurecrArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ServiceendpointAzurecrArgs | ServiceendpointAzurecrState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ServiceendpointAzurecrState | undefined;
            resourceInputs["appObjectId"] = state ? state.appObjectId : undefined;
            resourceInputs["authorization"] = state ? state.authorization : undefined;
            resourceInputs["azSpnRoleAssignmentId"] = state ? state.azSpnRoleAssignmentId : undefined;
            resourceInputs["azSpnRolePermissions"] = state ? state.azSpnRolePermissions : undefined;
            resourceInputs["azurecrName"] = state ? state.azurecrName : undefined;
            resourceInputs["azurecrSpnTenantid"] = state ? state.azurecrSpnTenantid : undefined;
            resourceInputs["azurecrSubscriptionId"] = state ? state.azurecrSubscriptionId : undefined;
            resourceInputs["azurecrSubscriptionName"] = state ? state.azurecrSubscriptionName : undefined;
            resourceInputs["credentials"] = state ? state.credentials : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["projectId"] = state ? state.projectId : undefined;
            resourceInputs["resourceGroup"] = state ? state.resourceGroup : undefined;
            resourceInputs["serviceEndpointAuthenticationScheme"] = state ? state.serviceEndpointAuthenticationScheme : undefined;
            resourceInputs["serviceEndpointName"] = state ? state.serviceEndpointName : undefined;
            resourceInputs["servicePrincipalId"] = state ? state.servicePrincipalId : undefined;
            resourceInputs["spnObjectId"] = state ? state.spnObjectId : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["workloadIdentityFederationIssuer"] = state ? state.workloadIdentityFederationIssuer : undefined;
            resourceInputs["workloadIdentityFederationSubject"] = state ? state.workloadIdentityFederationSubject : undefined;
        } else {
            const args = argsOrState as ServiceendpointAzurecrArgs | undefined;
            if ((!args || args.azurecrName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'azurecrName'");
            }
            if ((!args || args.azurecrSpnTenantid === undefined) && !opts.urn) {
                throw new Error("Missing required property 'azurecrSpnTenantid'");
            }
            if ((!args || args.azurecrSubscriptionId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'azurecrSubscriptionId'");
            }
            if ((!args || args.azurecrSubscriptionName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'azurecrSubscriptionName'");
            }
            if ((!args || args.projectId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'projectId'");
            }
            if ((!args || args.serviceEndpointName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceEndpointName'");
            }
            resourceInputs["authorization"] = args ? args.authorization : undefined;
            resourceInputs["azurecrName"] = args ? args.azurecrName : undefined;
            resourceInputs["azurecrSpnTenantid"] = args ? args.azurecrSpnTenantid : undefined;
            resourceInputs["azurecrSubscriptionId"] = args ? args.azurecrSubscriptionId : undefined;
            resourceInputs["azurecrSubscriptionName"] = args ? args.azurecrSubscriptionName : undefined;
            resourceInputs["credentials"] = args ? args.credentials : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["projectId"] = args ? args.projectId : undefined;
            resourceInputs["resourceGroup"] = args ? args.resourceGroup : undefined;
            resourceInputs["serviceEndpointAuthenticationScheme"] = args ? args.serviceEndpointAuthenticationScheme : undefined;
            resourceInputs["serviceEndpointName"] = args ? args.serviceEndpointName : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["appObjectId"] = undefined /*out*/;
            resourceInputs["azSpnRoleAssignmentId"] = undefined /*out*/;
            resourceInputs["azSpnRolePermissions"] = undefined /*out*/;
            resourceInputs["servicePrincipalId"] = undefined /*out*/;
            resourceInputs["spnObjectId"] = undefined /*out*/;
            resourceInputs["workloadIdentityFederationIssuer"] = undefined /*out*/;
            resourceInputs["workloadIdentityFederationSubject"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ServiceendpointAzurecr.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ServiceendpointAzurecr resources.
 */
export interface ServiceendpointAzurecrState {
    appObjectId?: pulumi.Input<string>;
    authorization?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    azSpnRoleAssignmentId?: pulumi.Input<string>;
    azSpnRolePermissions?: pulumi.Input<string>;
    /**
     * The AzureContainerRegistry registry which should be used.
     */
    azurecrName?: pulumi.Input<string>;
    /**
     * The service principal tenant id which should be used.
     */
    azurecrSpnTenantid?: pulumi.Input<string>;
    /**
     * The Azure subscription Id which should be used.
     */
    azurecrSubscriptionId?: pulumi.Input<string>;
    /**
     * The Azure subscription name which should be used.
     */
    azurecrSubscriptionName?: pulumi.Input<string>;
    credentials?: pulumi.Input<inputs.ServiceendpointAzurecrCredentials>;
    description?: pulumi.Input<string>;
    projectId?: pulumi.Input<string>;
    /**
     * Scope Resource Group
     */
    resourceGroup?: pulumi.Input<string>;
    /**
     * The AzureCR Service Endpoint Authentication Scheme, this can be 'WorkloadIdentityFederation', 'ManagedServiceIdentity'
     * or 'ServicePrincipal'.
     */
    serviceEndpointAuthenticationScheme?: pulumi.Input<string>;
    serviceEndpointName?: pulumi.Input<string>;
    servicePrincipalId?: pulumi.Input<string>;
    spnObjectId?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ServiceendpointAzurecrTimeouts>;
    /**
     * The issuer of the workload identity federation service principal.
     */
    workloadIdentityFederationIssuer?: pulumi.Input<string>;
    /**
     * The subject of the workload identity federation service principal.
     */
    workloadIdentityFederationSubject?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ServiceendpointAzurecr resource.
 */
export interface ServiceendpointAzurecrArgs {
    authorization?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The AzureContainerRegistry registry which should be used.
     */
    azurecrName: pulumi.Input<string>;
    /**
     * The service principal tenant id which should be used.
     */
    azurecrSpnTenantid: pulumi.Input<string>;
    /**
     * The Azure subscription Id which should be used.
     */
    azurecrSubscriptionId: pulumi.Input<string>;
    /**
     * The Azure subscription name which should be used.
     */
    azurecrSubscriptionName: pulumi.Input<string>;
    credentials?: pulumi.Input<inputs.ServiceendpointAzurecrCredentials>;
    description?: pulumi.Input<string>;
    projectId: pulumi.Input<string>;
    /**
     * Scope Resource Group
     */
    resourceGroup?: pulumi.Input<string>;
    /**
     * The AzureCR Service Endpoint Authentication Scheme, this can be 'WorkloadIdentityFederation', 'ManagedServiceIdentity'
     * or 'ServicePrincipal'.
     */
    serviceEndpointAuthenticationScheme?: pulumi.Input<string>;
    serviceEndpointName: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ServiceendpointAzurecrTimeouts>;
}
