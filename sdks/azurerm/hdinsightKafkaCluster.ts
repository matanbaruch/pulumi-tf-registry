// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class HdinsightKafkaCluster extends pulumi.CustomResource {
    /**
     * Get an existing HdinsightKafkaCluster resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: HdinsightKafkaClusterState, opts?: pulumi.CustomResourceOptions): HdinsightKafkaCluster {
        return new HdinsightKafkaCluster(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azurerm:index/hdinsightKafkaCluster:HdinsightKafkaCluster';

    /**
     * Returns true if the given object is an instance of HdinsightKafkaCluster.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is HdinsightKafkaCluster {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === HdinsightKafkaCluster.__pulumiType;
    }

    public readonly clusterVersion!: pulumi.Output<string>;
    public readonly componentVersion!: pulumi.Output<outputs.HdinsightKafkaClusterComponentVersion>;
    public readonly computeIsolation!: pulumi.Output<outputs.HdinsightKafkaClusterComputeIsolation | undefined>;
    public readonly diskEncryptions!: pulumi.Output<outputs.HdinsightKafkaClusterDiskEncryption[] | undefined>;
    public readonly encryptionInTransitEnabled!: pulumi.Output<boolean | undefined>;
    public readonly extension!: pulumi.Output<outputs.HdinsightKafkaClusterExtension | undefined>;
    public readonly gateway!: pulumi.Output<outputs.HdinsightKafkaClusterGateway>;
    public /*out*/ readonly httpsEndpoint!: pulumi.Output<string>;
    public /*out*/ readonly kafkaRestProxyEndpoint!: pulumi.Output<string>;
    public readonly location!: pulumi.Output<string>;
    public readonly metastores!: pulumi.Output<outputs.HdinsightKafkaClusterMetastores | undefined>;
    public readonly monitor!: pulumi.Output<outputs.HdinsightKafkaClusterMonitor | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly network!: pulumi.Output<outputs.HdinsightKafkaClusterNetwork | undefined>;
    public readonly privateLinkConfiguration!: pulumi.Output<outputs.HdinsightKafkaClusterPrivateLinkConfiguration | undefined>;
    public readonly resourceGroupName!: pulumi.Output<string>;
    public readonly restProxy!: pulumi.Output<outputs.HdinsightKafkaClusterRestProxy | undefined>;
    public readonly roles!: pulumi.Output<outputs.HdinsightKafkaClusterRoles>;
    public readonly securityProfile!: pulumi.Output<outputs.HdinsightKafkaClusterSecurityProfile | undefined>;
    public /*out*/ readonly sshEndpoint!: pulumi.Output<string>;
    public readonly storageAccountGen2!: pulumi.Output<outputs.HdinsightKafkaClusterStorageAccountGen2 | undefined>;
    public readonly storageAccounts!: pulumi.Output<outputs.HdinsightKafkaClusterStorageAccount[] | undefined>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly tier!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.HdinsightKafkaClusterTimeouts | undefined>;
    public readonly tlsMinVersion!: pulumi.Output<string | undefined>;

    /**
     * Create a HdinsightKafkaCluster resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: HdinsightKafkaClusterArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: HdinsightKafkaClusterArgs | HdinsightKafkaClusterState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as HdinsightKafkaClusterState | undefined;
            resourceInputs["clusterVersion"] = state ? state.clusterVersion : undefined;
            resourceInputs["componentVersion"] = state ? state.componentVersion : undefined;
            resourceInputs["computeIsolation"] = state ? state.computeIsolation : undefined;
            resourceInputs["diskEncryptions"] = state ? state.diskEncryptions : undefined;
            resourceInputs["encryptionInTransitEnabled"] = state ? state.encryptionInTransitEnabled : undefined;
            resourceInputs["extension"] = state ? state.extension : undefined;
            resourceInputs["gateway"] = state ? state.gateway : undefined;
            resourceInputs["httpsEndpoint"] = state ? state.httpsEndpoint : undefined;
            resourceInputs["kafkaRestProxyEndpoint"] = state ? state.kafkaRestProxyEndpoint : undefined;
            resourceInputs["location"] = state ? state.location : undefined;
            resourceInputs["metastores"] = state ? state.metastores : undefined;
            resourceInputs["monitor"] = state ? state.monitor : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["network"] = state ? state.network : undefined;
            resourceInputs["privateLinkConfiguration"] = state ? state.privateLinkConfiguration : undefined;
            resourceInputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            resourceInputs["restProxy"] = state ? state.restProxy : undefined;
            resourceInputs["roles"] = state ? state.roles : undefined;
            resourceInputs["securityProfile"] = state ? state.securityProfile : undefined;
            resourceInputs["sshEndpoint"] = state ? state.sshEndpoint : undefined;
            resourceInputs["storageAccountGen2"] = state ? state.storageAccountGen2 : undefined;
            resourceInputs["storageAccounts"] = state ? state.storageAccounts : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["tier"] = state ? state.tier : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["tlsMinVersion"] = state ? state.tlsMinVersion : undefined;
        } else {
            const args = argsOrState as HdinsightKafkaClusterArgs | undefined;
            if ((!args || args.clusterVersion === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusterVersion'");
            }
            if ((!args || args.componentVersion === undefined) && !opts.urn) {
                throw new Error("Missing required property 'componentVersion'");
            }
            if ((!args || args.gateway === undefined) && !opts.urn) {
                throw new Error("Missing required property 'gateway'");
            }
            if ((!args || args.location === undefined) && !opts.urn) {
                throw new Error("Missing required property 'location'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.roles === undefined) && !opts.urn) {
                throw new Error("Missing required property 'roles'");
            }
            if ((!args || args.tier === undefined) && !opts.urn) {
                throw new Error("Missing required property 'tier'");
            }
            resourceInputs["clusterVersion"] = args ? args.clusterVersion : undefined;
            resourceInputs["componentVersion"] = args ? args.componentVersion : undefined;
            resourceInputs["computeIsolation"] = args ? args.computeIsolation : undefined;
            resourceInputs["diskEncryptions"] = args ? args.diskEncryptions : undefined;
            resourceInputs["encryptionInTransitEnabled"] = args ? args.encryptionInTransitEnabled : undefined;
            resourceInputs["extension"] = args ? args.extension : undefined;
            resourceInputs["gateway"] = args ? args.gateway : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["metastores"] = args ? args.metastores : undefined;
            resourceInputs["monitor"] = args ? args.monitor : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["network"] = args ? args.network : undefined;
            resourceInputs["privateLinkConfiguration"] = args ? args.privateLinkConfiguration : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["restProxy"] = args ? args.restProxy : undefined;
            resourceInputs["roles"] = args ? args.roles : undefined;
            resourceInputs["securityProfile"] = args ? args.securityProfile : undefined;
            resourceInputs["storageAccountGen2"] = args ? args.storageAccountGen2 : undefined;
            resourceInputs["storageAccounts"] = args ? args.storageAccounts : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["tier"] = args ? args.tier : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["tlsMinVersion"] = args ? args.tlsMinVersion : undefined;
            resourceInputs["httpsEndpoint"] = undefined /*out*/;
            resourceInputs["kafkaRestProxyEndpoint"] = undefined /*out*/;
            resourceInputs["sshEndpoint"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(HdinsightKafkaCluster.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering HdinsightKafkaCluster resources.
 */
export interface HdinsightKafkaClusterState {
    clusterVersion?: pulumi.Input<string>;
    componentVersion?: pulumi.Input<inputs.HdinsightKafkaClusterComponentVersion>;
    computeIsolation?: pulumi.Input<inputs.HdinsightKafkaClusterComputeIsolation>;
    diskEncryptions?: pulumi.Input<pulumi.Input<inputs.HdinsightKafkaClusterDiskEncryption>[]>;
    encryptionInTransitEnabled?: pulumi.Input<boolean>;
    extension?: pulumi.Input<inputs.HdinsightKafkaClusterExtension>;
    gateway?: pulumi.Input<inputs.HdinsightKafkaClusterGateway>;
    httpsEndpoint?: pulumi.Input<string>;
    kafkaRestProxyEndpoint?: pulumi.Input<string>;
    location?: pulumi.Input<string>;
    metastores?: pulumi.Input<inputs.HdinsightKafkaClusterMetastores>;
    monitor?: pulumi.Input<inputs.HdinsightKafkaClusterMonitor>;
    name?: pulumi.Input<string>;
    network?: pulumi.Input<inputs.HdinsightKafkaClusterNetwork>;
    privateLinkConfiguration?: pulumi.Input<inputs.HdinsightKafkaClusterPrivateLinkConfiguration>;
    resourceGroupName?: pulumi.Input<string>;
    restProxy?: pulumi.Input<inputs.HdinsightKafkaClusterRestProxy>;
    roles?: pulumi.Input<inputs.HdinsightKafkaClusterRoles>;
    securityProfile?: pulumi.Input<inputs.HdinsightKafkaClusterSecurityProfile>;
    sshEndpoint?: pulumi.Input<string>;
    storageAccountGen2?: pulumi.Input<inputs.HdinsightKafkaClusterStorageAccountGen2>;
    storageAccounts?: pulumi.Input<pulumi.Input<inputs.HdinsightKafkaClusterStorageAccount>[]>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tier?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.HdinsightKafkaClusterTimeouts>;
    tlsMinVersion?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a HdinsightKafkaCluster resource.
 */
export interface HdinsightKafkaClusterArgs {
    clusterVersion: pulumi.Input<string>;
    componentVersion: pulumi.Input<inputs.HdinsightKafkaClusterComponentVersion>;
    computeIsolation?: pulumi.Input<inputs.HdinsightKafkaClusterComputeIsolation>;
    diskEncryptions?: pulumi.Input<pulumi.Input<inputs.HdinsightKafkaClusterDiskEncryption>[]>;
    encryptionInTransitEnabled?: pulumi.Input<boolean>;
    extension?: pulumi.Input<inputs.HdinsightKafkaClusterExtension>;
    gateway: pulumi.Input<inputs.HdinsightKafkaClusterGateway>;
    location: pulumi.Input<string>;
    metastores?: pulumi.Input<inputs.HdinsightKafkaClusterMetastores>;
    monitor?: pulumi.Input<inputs.HdinsightKafkaClusterMonitor>;
    name?: pulumi.Input<string>;
    network?: pulumi.Input<inputs.HdinsightKafkaClusterNetwork>;
    privateLinkConfiguration?: pulumi.Input<inputs.HdinsightKafkaClusterPrivateLinkConfiguration>;
    resourceGroupName: pulumi.Input<string>;
    restProxy?: pulumi.Input<inputs.HdinsightKafkaClusterRestProxy>;
    roles: pulumi.Input<inputs.HdinsightKafkaClusterRoles>;
    securityProfile?: pulumi.Input<inputs.HdinsightKafkaClusterSecurityProfile>;
    storageAccountGen2?: pulumi.Input<inputs.HdinsightKafkaClusterStorageAccountGen2>;
    storageAccounts?: pulumi.Input<pulumi.Input<inputs.HdinsightKafkaClusterStorageAccount>[]>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tier: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.HdinsightKafkaClusterTimeouts>;
    tlsMinVersion?: pulumi.Input<string>;
}
