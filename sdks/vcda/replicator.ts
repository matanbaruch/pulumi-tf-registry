// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Replicator extends pulumi.CustomResource {
    /**
     * Get an existing Replicator resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ReplicatorState, opts?: pulumi.CustomResourceOptions): Replicator {
        return new Replicator(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'vcda:index/replicator:Replicator';

    /**
     * Returns true if the given object is an instance of Replicator.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Replicator {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Replicator.__pulumiType;
    }

    /**
     * The thumbprint of the Replicator Service API. It can either be computed from the `vcda.getRemoteServicesThumbprint` data
     * source or provided directly as a SHA-256 fingerprint.
     */
    public readonly apiThumbprint!: pulumi.Output<string>;
    /**
     * The URL of the Replicator Service API.
     */
    public readonly apiUrl!: pulumi.Output<string>;
    /**
     * The build version of the Replicator Service.
     */
    public /*out*/ readonly buildVersion!: pulumi.Output<string>;
    /**
     * The data address of the Replicator Service.
     */
    public /*out*/ readonly dataAddress!: pulumi.Output<string>;
    /**
     * The description for the Replicator Service.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Flag indicating whether the Replicator Service is placed in maintenance mode.
     */
    public /*out*/ readonly isInMaintenanceMode!: pulumi.Output<boolean>;
    /**
     * The thumbprint of the vCenter Server Lookup service. It can either be computed from the
     * `vcda.getRemoteServicesThumbprint` data source or provided directly as a SHA-256 fingerprint.
     */
    public readonly lookupServiceThumbprint!: pulumi.Output<string>;
    /**
     * The URL of the vCenter Server Lookup service. For example, https://server.domain.com/lookupservice/sdk.
     */
    public readonly lookupServiceUrl!: pulumi.Output<string>;
    /**
     * The owner of the Replicator Service.
     */
    public readonly owner!: pulumi.Output<string>;
    /**
     * The vCenter Server Lookup service thumbprint of the Replicator Service.
     */
    public /*out*/ readonly replicatorLsThumbprint!: pulumi.Output<string>;
    /**
     * The vCenter Server Lookup service URL of the Replicator Service.
     */
    public /*out*/ readonly replicatorLsUrl!: pulumi.Output<string>;
    /**
     * The **root** user password of the Replicator Appliance.
     */
    public readonly rootPassword!: pulumi.Output<string>;
    /**
     * The certificate of the Replicator Service.
     */
    public readonly serviceCert!: pulumi.Output<string>;
    /**
     * The site name of the Manager Service.
     */
    public readonly siteName!: pulumi.Output<string>;
    /**
     * The password of the SSO user for the Replicator Service.
     */
    public readonly ssoPassword!: pulumi.Output<string>;
    /**
     * The single sign-on (SSO) user for the Replicator Service.
     */
    public readonly ssoUser!: pulumi.Output<string>;

    /**
     * Create a Replicator resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ReplicatorArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ReplicatorArgs | ReplicatorState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ReplicatorState | undefined;
            resourceInputs["apiThumbprint"] = state ? state.apiThumbprint : undefined;
            resourceInputs["apiUrl"] = state ? state.apiUrl : undefined;
            resourceInputs["buildVersion"] = state ? state.buildVersion : undefined;
            resourceInputs["dataAddress"] = state ? state.dataAddress : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["isInMaintenanceMode"] = state ? state.isInMaintenanceMode : undefined;
            resourceInputs["lookupServiceThumbprint"] = state ? state.lookupServiceThumbprint : undefined;
            resourceInputs["lookupServiceUrl"] = state ? state.lookupServiceUrl : undefined;
            resourceInputs["owner"] = state ? state.owner : undefined;
            resourceInputs["replicatorLsThumbprint"] = state ? state.replicatorLsThumbprint : undefined;
            resourceInputs["replicatorLsUrl"] = state ? state.replicatorLsUrl : undefined;
            resourceInputs["rootPassword"] = state ? state.rootPassword : undefined;
            resourceInputs["serviceCert"] = state ? state.serviceCert : undefined;
            resourceInputs["siteName"] = state ? state.siteName : undefined;
            resourceInputs["ssoPassword"] = state ? state.ssoPassword : undefined;
            resourceInputs["ssoUser"] = state ? state.ssoUser : undefined;
        } else {
            const args = argsOrState as ReplicatorArgs | undefined;
            if ((!args || args.apiThumbprint === undefined) && !opts.urn) {
                throw new Error("Missing required property 'apiThumbprint'");
            }
            if ((!args || args.apiUrl === undefined) && !opts.urn) {
                throw new Error("Missing required property 'apiUrl'");
            }
            if ((!args || args.lookupServiceThumbprint === undefined) && !opts.urn) {
                throw new Error("Missing required property 'lookupServiceThumbprint'");
            }
            if ((!args || args.lookupServiceUrl === undefined) && !opts.urn) {
                throw new Error("Missing required property 'lookupServiceUrl'");
            }
            if ((!args || args.owner === undefined) && !opts.urn) {
                throw new Error("Missing required property 'owner'");
            }
            if ((!args || args.rootPassword === undefined) && !opts.urn) {
                throw new Error("Missing required property 'rootPassword'");
            }
            if ((!args || args.serviceCert === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceCert'");
            }
            if ((!args || args.siteName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'siteName'");
            }
            if ((!args || args.ssoPassword === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ssoPassword'");
            }
            if ((!args || args.ssoUser === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ssoUser'");
            }
            resourceInputs["apiThumbprint"] = args ? args.apiThumbprint : undefined;
            resourceInputs["apiUrl"] = args ? args.apiUrl : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["lookupServiceThumbprint"] = args ? args.lookupServiceThumbprint : undefined;
            resourceInputs["lookupServiceUrl"] = args ? args.lookupServiceUrl : undefined;
            resourceInputs["owner"] = args ? args.owner : undefined;
            resourceInputs["rootPassword"] = args ? args.rootPassword : undefined;
            resourceInputs["serviceCert"] = args ? args.serviceCert : undefined;
            resourceInputs["siteName"] = args ? args.siteName : undefined;
            resourceInputs["ssoPassword"] = args ? args.ssoPassword : undefined;
            resourceInputs["ssoUser"] = args ? args.ssoUser : undefined;
            resourceInputs["buildVersion"] = undefined /*out*/;
            resourceInputs["dataAddress"] = undefined /*out*/;
            resourceInputs["isInMaintenanceMode"] = undefined /*out*/;
            resourceInputs["replicatorLsThumbprint"] = undefined /*out*/;
            resourceInputs["replicatorLsUrl"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Replicator.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Replicator resources.
 */
export interface ReplicatorState {
    /**
     * The thumbprint of the Replicator Service API. It can either be computed from the `vcda.getRemoteServicesThumbprint` data
     * source or provided directly as a SHA-256 fingerprint.
     */
    apiThumbprint?: pulumi.Input<string>;
    /**
     * The URL of the Replicator Service API.
     */
    apiUrl?: pulumi.Input<string>;
    /**
     * The build version of the Replicator Service.
     */
    buildVersion?: pulumi.Input<string>;
    /**
     * The data address of the Replicator Service.
     */
    dataAddress?: pulumi.Input<string>;
    /**
     * The description for the Replicator Service.
     */
    description?: pulumi.Input<string>;
    /**
     * Flag indicating whether the Replicator Service is placed in maintenance mode.
     */
    isInMaintenanceMode?: pulumi.Input<boolean>;
    /**
     * The thumbprint of the vCenter Server Lookup service. It can either be computed from the
     * `vcda.getRemoteServicesThumbprint` data source or provided directly as a SHA-256 fingerprint.
     */
    lookupServiceThumbprint?: pulumi.Input<string>;
    /**
     * The URL of the vCenter Server Lookup service. For example, https://server.domain.com/lookupservice/sdk.
     */
    lookupServiceUrl?: pulumi.Input<string>;
    /**
     * The owner of the Replicator Service.
     */
    owner?: pulumi.Input<string>;
    /**
     * The vCenter Server Lookup service thumbprint of the Replicator Service.
     */
    replicatorLsThumbprint?: pulumi.Input<string>;
    /**
     * The vCenter Server Lookup service URL of the Replicator Service.
     */
    replicatorLsUrl?: pulumi.Input<string>;
    /**
     * The **root** user password of the Replicator Appliance.
     */
    rootPassword?: pulumi.Input<string>;
    /**
     * The certificate of the Replicator Service.
     */
    serviceCert?: pulumi.Input<string>;
    /**
     * The site name of the Manager Service.
     */
    siteName?: pulumi.Input<string>;
    /**
     * The password of the SSO user for the Replicator Service.
     */
    ssoPassword?: pulumi.Input<string>;
    /**
     * The single sign-on (SSO) user for the Replicator Service.
     */
    ssoUser?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Replicator resource.
 */
export interface ReplicatorArgs {
    /**
     * The thumbprint of the Replicator Service API. It can either be computed from the `vcda.getRemoteServicesThumbprint` data
     * source or provided directly as a SHA-256 fingerprint.
     */
    apiThumbprint: pulumi.Input<string>;
    /**
     * The URL of the Replicator Service API.
     */
    apiUrl: pulumi.Input<string>;
    /**
     * The description for the Replicator Service.
     */
    description?: pulumi.Input<string>;
    /**
     * The thumbprint of the vCenter Server Lookup service. It can either be computed from the
     * `vcda.getRemoteServicesThumbprint` data source or provided directly as a SHA-256 fingerprint.
     */
    lookupServiceThumbprint: pulumi.Input<string>;
    /**
     * The URL of the vCenter Server Lookup service. For example, https://server.domain.com/lookupservice/sdk.
     */
    lookupServiceUrl: pulumi.Input<string>;
    /**
     * The owner of the Replicator Service.
     */
    owner: pulumi.Input<string>;
    /**
     * The **root** user password of the Replicator Appliance.
     */
    rootPassword: pulumi.Input<string>;
    /**
     * The certificate of the Replicator Service.
     */
    serviceCert: pulumi.Input<string>;
    /**
     * The site name of the Manager Service.
     */
    siteName: pulumi.Input<string>;
    /**
     * The password of the SSO user for the Replicator Service.
     */
    ssoPassword: pulumi.Input<string>;
    /**
     * The single sign-on (SSO) user for the Replicator Service.
     */
    ssoUser: pulumi.Input<string>;
}
