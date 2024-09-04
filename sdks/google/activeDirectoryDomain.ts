// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ActiveDirectoryDomain extends pulumi.CustomResource {
    /**
     * Get an existing ActiveDirectoryDomain resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ActiveDirectoryDomainState, opts?: pulumi.CustomResourceOptions): ActiveDirectoryDomain {
        return new ActiveDirectoryDomain(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google:index/activeDirectoryDomain:ActiveDirectoryDomain';

    /**
     * Returns true if the given object is an instance of ActiveDirectoryDomain.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ActiveDirectoryDomain {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ActiveDirectoryDomain.__pulumiType;
    }

    /**
     * The name of delegated administrator account used to perform Active Directory operations. If not specified, setupadmin
     * will be used.
     */
    public readonly admin!: pulumi.Output<string | undefined>;
    /**
     * The full names of the Google Compute Engine networks the domain instance is connected to. The domain is only available
     * on networks listed in authorizedNetworks. If CIDR subnets overlap between networks, domain creation will fail.
     */
    public readonly authorizedNetworks!: pulumi.Output<string[] | undefined>;
    public readonly deletionProtection!: pulumi.Output<boolean | undefined>;
    /**
     * The fully qualified domain name. e.g. mydomain.myorganization.com, with the restrictions of
     * https://cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains.
     */
    public readonly domainName!: pulumi.Output<string>;
    public /*out*/ readonly effectiveLabels!: pulumi.Output<{[key: string]: string}>;
    /**
     * The fully-qualified domain name of the exposed domain used by clients to connect to the service. Similar to what would
     * be chosen for an Active Directory set up on an internal network.
     */
    public /*out*/ readonly fqdn!: pulumi.Output<string>;
    /**
     * Resource labels that can contain user-provided metadata **Note**: This field is non-authoritative, and will only manage
     * the labels present in your configuration. Please refer to the field 'effective_labels' for all of the labels present on
     * the resource.
     */
    public readonly labels!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Locations where domain needs to be provisioned. [regions][compute/docs/regions-zones/] e.g. us-west1 or us-east4 Service
     * supports up to 4 locations at once. Each location will use a /26 block.
     */
    public readonly locations!: pulumi.Output<string[]>;
    /**
     * The unique name of the domain using the format: 'projects/{project}/locations/global/domains/{domainName}'.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    public readonly project!: pulumi.Output<string>;
    /**
     * The CIDR range of internal addresses that are reserved for this domain. Reserved networks must be /24 or larger. Ranges
     * must be unique and non-overlapping with existing subnets in authorizedNetworks
     */
    public readonly reservedIpRange!: pulumi.Output<string>;
    /**
     * The combination of labels configured directly on the resource and default labels configured on the provider.
     */
    public /*out*/ readonly terraformLabels!: pulumi.Output<{[key: string]: string}>;
    public readonly timeouts!: pulumi.Output<outputs.ActiveDirectoryDomainTimeouts | undefined>;

    /**
     * Create a ActiveDirectoryDomain resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ActiveDirectoryDomainArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ActiveDirectoryDomainArgs | ActiveDirectoryDomainState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ActiveDirectoryDomainState | undefined;
            resourceInputs["admin"] = state ? state.admin : undefined;
            resourceInputs["authorizedNetworks"] = state ? state.authorizedNetworks : undefined;
            resourceInputs["deletionProtection"] = state ? state.deletionProtection : undefined;
            resourceInputs["domainName"] = state ? state.domainName : undefined;
            resourceInputs["effectiveLabels"] = state ? state.effectiveLabels : undefined;
            resourceInputs["fqdn"] = state ? state.fqdn : undefined;
            resourceInputs["labels"] = state ? state.labels : undefined;
            resourceInputs["locations"] = state ? state.locations : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["reservedIpRange"] = state ? state.reservedIpRange : undefined;
            resourceInputs["terraformLabels"] = state ? state.terraformLabels : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as ActiveDirectoryDomainArgs | undefined;
            if ((!args || args.domainName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'domainName'");
            }
            if ((!args || args.locations === undefined) && !opts.urn) {
                throw new Error("Missing required property 'locations'");
            }
            if ((!args || args.reservedIpRange === undefined) && !opts.urn) {
                throw new Error("Missing required property 'reservedIpRange'");
            }
            resourceInputs["admin"] = args ? args.admin : undefined;
            resourceInputs["authorizedNetworks"] = args ? args.authorizedNetworks : undefined;
            resourceInputs["deletionProtection"] = args ? args.deletionProtection : undefined;
            resourceInputs["domainName"] = args ? args.domainName : undefined;
            resourceInputs["labels"] = args ? args.labels : undefined;
            resourceInputs["locations"] = args ? args.locations : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["reservedIpRange"] = args ? args.reservedIpRange : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["effectiveLabels"] = undefined /*out*/;
            resourceInputs["fqdn"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["terraformLabels"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ActiveDirectoryDomain.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ActiveDirectoryDomain resources.
 */
export interface ActiveDirectoryDomainState {
    /**
     * The name of delegated administrator account used to perform Active Directory operations. If not specified, setupadmin
     * will be used.
     */
    admin?: pulumi.Input<string>;
    /**
     * The full names of the Google Compute Engine networks the domain instance is connected to. The domain is only available
     * on networks listed in authorizedNetworks. If CIDR subnets overlap between networks, domain creation will fail.
     */
    authorizedNetworks?: pulumi.Input<pulumi.Input<string>[]>;
    deletionProtection?: pulumi.Input<boolean>;
    /**
     * The fully qualified domain name. e.g. mydomain.myorganization.com, with the restrictions of
     * https://cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains.
     */
    domainName?: pulumi.Input<string>;
    effectiveLabels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The fully-qualified domain name of the exposed domain used by clients to connect to the service. Similar to what would
     * be chosen for an Active Directory set up on an internal network.
     */
    fqdn?: pulumi.Input<string>;
    /**
     * Resource labels that can contain user-provided metadata **Note**: This field is non-authoritative, and will only manage
     * the labels present in your configuration. Please refer to the field 'effective_labels' for all of the labels present on
     * the resource.
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Locations where domain needs to be provisioned. [regions][compute/docs/regions-zones/] e.g. us-west1 or us-east4 Service
     * supports up to 4 locations at once. Each location will use a /26 block.
     */
    locations?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The unique name of the domain using the format: 'projects/{project}/locations/global/domains/{domainName}'.
     */
    name?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    /**
     * The CIDR range of internal addresses that are reserved for this domain. Reserved networks must be /24 or larger. Ranges
     * must be unique and non-overlapping with existing subnets in authorizedNetworks
     */
    reservedIpRange?: pulumi.Input<string>;
    /**
     * The combination of labels configured directly on the resource and default labels configured on the provider.
     */
    terraformLabels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.ActiveDirectoryDomainTimeouts>;
}

/**
 * The set of arguments for constructing a ActiveDirectoryDomain resource.
 */
export interface ActiveDirectoryDomainArgs {
    /**
     * The name of delegated administrator account used to perform Active Directory operations. If not specified, setupadmin
     * will be used.
     */
    admin?: pulumi.Input<string>;
    /**
     * The full names of the Google Compute Engine networks the domain instance is connected to. The domain is only available
     * on networks listed in authorizedNetworks. If CIDR subnets overlap between networks, domain creation will fail.
     */
    authorizedNetworks?: pulumi.Input<pulumi.Input<string>[]>;
    deletionProtection?: pulumi.Input<boolean>;
    /**
     * The fully qualified domain name. e.g. mydomain.myorganization.com, with the restrictions of
     * https://cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains.
     */
    domainName: pulumi.Input<string>;
    /**
     * Resource labels that can contain user-provided metadata **Note**: This field is non-authoritative, and will only manage
     * the labels present in your configuration. Please refer to the field 'effective_labels' for all of the labels present on
     * the resource.
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Locations where domain needs to be provisioned. [regions][compute/docs/regions-zones/] e.g. us-west1 or us-east4 Service
     * supports up to 4 locations at once. Each location will use a /26 block.
     */
    locations: pulumi.Input<pulumi.Input<string>[]>;
    project?: pulumi.Input<string>;
    /**
     * The CIDR range of internal addresses that are reserved for this domain. Reserved networks must be /24 or larger. Ranges
     * must be unique and non-overlapping with existing subnets in authorizedNetworks
     */
    reservedIpRange: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ActiveDirectoryDomainTimeouts>;
}
