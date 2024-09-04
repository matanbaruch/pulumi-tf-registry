// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class DbaasLogsCluster extends pulumi.CustomResource {
    /**
     * Get an existing DbaasLogsCluster resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DbaasLogsClusterState, opts?: pulumi.CustomResourceOptions): DbaasLogsCluster {
        return new DbaasLogsCluster(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'ovh:index/dbaasLogsCluster:DbaasLogsCluster';

    /**
     * Returns true if the given object is an instance of DbaasLogsCluster.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DbaasLogsCluster {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DbaasLogsCluster.__pulumiType;
    }

    /**
     * Allowed networks for ARCHIVE flow type
     */
    public readonly archiveAllowedNetworks!: pulumi.Output<string[] | undefined>;
    public readonly clusterId!: pulumi.Output<string | undefined>;
    /**
     * Cluster type
     */
    public /*out*/ readonly clusterType!: pulumi.Output<string>;
    /**
     * PEM for dedicated inputs
     */
    public /*out*/ readonly dedicatedInputPem!: pulumi.Output<string>;
    /**
     * Allowed networks for DIRECT_INPUT flow type
     */
    public readonly directInputAllowedNetworks!: pulumi.Output<string[] | undefined>;
    /**
     * PEM for direct inputs
     */
    public /*out*/ readonly directInputPem!: pulumi.Output<string>;
    /**
     * hostname
     */
    public /*out*/ readonly hostname!: pulumi.Output<string>;
    /**
     * Initial allowed networks for ARCHIVE flow type
     */
    public /*out*/ readonly initialArchiveAllowedNetworks!: pulumi.Output<string[]>;
    /**
     * Initial allowed networks for DIRECT_INPUT flow type
     */
    public /*out*/ readonly initialDirectInputAllowedNetworks!: pulumi.Output<string[]>;
    /**
     * Initial allowed networks for QUERY flow type
     */
    public /*out*/ readonly initialQueryAllowedNetworks!: pulumi.Output<string[]>;
    /**
     * All content generated by given service will be placed on this cluster
     */
    public /*out*/ readonly isDefault!: pulumi.Output<boolean>;
    /**
     * Allow given service to perform advanced operations on cluster
     */
    public /*out*/ readonly isUnlocked!: pulumi.Output<boolean>;
    /**
     * Allowed networks for QUERY flow type
     */
    public readonly queryAllowedNetworks!: pulumi.Output<string[] | undefined>;
    /**
     * Data center localization
     */
    public /*out*/ readonly region!: pulumi.Output<string>;
    public readonly serviceName!: pulumi.Output<string>;

    /**
     * Create a DbaasLogsCluster resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DbaasLogsClusterArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DbaasLogsClusterArgs | DbaasLogsClusterState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DbaasLogsClusterState | undefined;
            resourceInputs["archiveAllowedNetworks"] = state ? state.archiveAllowedNetworks : undefined;
            resourceInputs["clusterId"] = state ? state.clusterId : undefined;
            resourceInputs["clusterType"] = state ? state.clusterType : undefined;
            resourceInputs["dedicatedInputPem"] = state ? state.dedicatedInputPem : undefined;
            resourceInputs["directInputAllowedNetworks"] = state ? state.directInputAllowedNetworks : undefined;
            resourceInputs["directInputPem"] = state ? state.directInputPem : undefined;
            resourceInputs["hostname"] = state ? state.hostname : undefined;
            resourceInputs["initialArchiveAllowedNetworks"] = state ? state.initialArchiveAllowedNetworks : undefined;
            resourceInputs["initialDirectInputAllowedNetworks"] = state ? state.initialDirectInputAllowedNetworks : undefined;
            resourceInputs["initialQueryAllowedNetworks"] = state ? state.initialQueryAllowedNetworks : undefined;
            resourceInputs["isDefault"] = state ? state.isDefault : undefined;
            resourceInputs["isUnlocked"] = state ? state.isUnlocked : undefined;
            resourceInputs["queryAllowedNetworks"] = state ? state.queryAllowedNetworks : undefined;
            resourceInputs["region"] = state ? state.region : undefined;
            resourceInputs["serviceName"] = state ? state.serviceName : undefined;
        } else {
            const args = argsOrState as DbaasLogsClusterArgs | undefined;
            if ((!args || args.serviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceName'");
            }
            resourceInputs["archiveAllowedNetworks"] = args ? args.archiveAllowedNetworks : undefined;
            resourceInputs["clusterId"] = args ? args.clusterId : undefined;
            resourceInputs["directInputAllowedNetworks"] = args ? args.directInputAllowedNetworks : undefined;
            resourceInputs["queryAllowedNetworks"] = args ? args.queryAllowedNetworks : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["clusterType"] = undefined /*out*/;
            resourceInputs["dedicatedInputPem"] = undefined /*out*/;
            resourceInputs["directInputPem"] = undefined /*out*/;
            resourceInputs["hostname"] = undefined /*out*/;
            resourceInputs["initialArchiveAllowedNetworks"] = undefined /*out*/;
            resourceInputs["initialDirectInputAllowedNetworks"] = undefined /*out*/;
            resourceInputs["initialQueryAllowedNetworks"] = undefined /*out*/;
            resourceInputs["isDefault"] = undefined /*out*/;
            resourceInputs["isUnlocked"] = undefined /*out*/;
            resourceInputs["region"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["dedicatedInputPem", "directInputPem", "initialArchiveAllowedNetworks", "initialDirectInputAllowedNetworks", "initialQueryAllowedNetworks"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(DbaasLogsCluster.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DbaasLogsCluster resources.
 */
export interface DbaasLogsClusterState {
    /**
     * Allowed networks for ARCHIVE flow type
     */
    archiveAllowedNetworks?: pulumi.Input<pulumi.Input<string>[]>;
    clusterId?: pulumi.Input<string>;
    /**
     * Cluster type
     */
    clusterType?: pulumi.Input<string>;
    /**
     * PEM for dedicated inputs
     */
    dedicatedInputPem?: pulumi.Input<string>;
    /**
     * Allowed networks for DIRECT_INPUT flow type
     */
    directInputAllowedNetworks?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * PEM for direct inputs
     */
    directInputPem?: pulumi.Input<string>;
    /**
     * hostname
     */
    hostname?: pulumi.Input<string>;
    /**
     * Initial allowed networks for ARCHIVE flow type
     */
    initialArchiveAllowedNetworks?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Initial allowed networks for DIRECT_INPUT flow type
     */
    initialDirectInputAllowedNetworks?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Initial allowed networks for QUERY flow type
     */
    initialQueryAllowedNetworks?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * All content generated by given service will be placed on this cluster
     */
    isDefault?: pulumi.Input<boolean>;
    /**
     * Allow given service to perform advanced operations on cluster
     */
    isUnlocked?: pulumi.Input<boolean>;
    /**
     * Allowed networks for QUERY flow type
     */
    queryAllowedNetworks?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Data center localization
     */
    region?: pulumi.Input<string>;
    serviceName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DbaasLogsCluster resource.
 */
export interface DbaasLogsClusterArgs {
    /**
     * Allowed networks for ARCHIVE flow type
     */
    archiveAllowedNetworks?: pulumi.Input<pulumi.Input<string>[]>;
    clusterId?: pulumi.Input<string>;
    /**
     * Allowed networks for DIRECT_INPUT flow type
     */
    directInputAllowedNetworks?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Allowed networks for QUERY flow type
     */
    queryAllowedNetworks?: pulumi.Input<pulumi.Input<string>[]>;
    serviceName: pulumi.Input<string>;
}
