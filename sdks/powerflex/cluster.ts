// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Cluster extends pulumi.CustomResource {
    /**
     * Get an existing Cluster resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ClusterState, opts?: pulumi.CustomResourceOptions): Cluster {
        return new Cluster(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'powerflex:index/cluster:Cluster';

    /**
     * Returns true if the given object is an instance of Cluster.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Cluster {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Cluster.__pulumiType;
    }

    /**
     * Allow Non Secure Communication With lia
     */
    public readonly allowNonSecureCommunicationWithLia!: pulumi.Output<boolean | undefined>;
    /**
     * Allow Non Secure Communication With MDM
     */
    public readonly allowNonSecureCommunicationWithMdm!: pulumi.Output<boolean | undefined>;
    /**
     * Cluster Installation Details
     */
    public readonly clusters!: pulumi.Output<outputs.ClusterCluster[]>;
    /**
     * Disable Non Mgmt Components Auth
     */
    public readonly disableNonMgmtComponentsAuth!: pulumi.Output<boolean | undefined>;
    /**
     * Lia Password
     */
    public readonly liaPassword!: pulumi.Output<string>;
    /**
     * Cluster MDM Details
     */
    public /*out*/ readonly mdmLists!: pulumi.Output<outputs.ClusterMdmList[]>;
    /**
     * MDM Password
     */
    public readonly mdmPassword!: pulumi.Output<string>;
    /**
     * Cluster Protection Domain Details
     */
    public /*out*/ readonly protectionDomains!: pulumi.Output<outputs.ClusterProtectionDomain[]>;
    /**
     * Cluster SDC Details
     */
    public /*out*/ readonly sdcLists!: pulumi.Output<outputs.ClusterSdcList[]>;
    /**
     * Cluster SDR Details
     */
    public /*out*/ readonly sdrLists!: pulumi.Output<outputs.ClusterSdrList[]>;
    /**
     * Cluster SDS Details
     */
    public /*out*/ readonly sdsLists!: pulumi.Output<outputs.ClusterSdsList[]>;
    /**
     * Storage Pool Details
     */
    public readonly storagePools!: pulumi.Output<outputs.ClusterStoragePool[] | undefined>;

    /**
     * Create a Cluster resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ClusterArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ClusterArgs | ClusterState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ClusterState | undefined;
            resourceInputs["allowNonSecureCommunicationWithLia"] = state ? state.allowNonSecureCommunicationWithLia : undefined;
            resourceInputs["allowNonSecureCommunicationWithMdm"] = state ? state.allowNonSecureCommunicationWithMdm : undefined;
            resourceInputs["clusters"] = state ? state.clusters : undefined;
            resourceInputs["disableNonMgmtComponentsAuth"] = state ? state.disableNonMgmtComponentsAuth : undefined;
            resourceInputs["liaPassword"] = state ? state.liaPassword : undefined;
            resourceInputs["mdmLists"] = state ? state.mdmLists : undefined;
            resourceInputs["mdmPassword"] = state ? state.mdmPassword : undefined;
            resourceInputs["protectionDomains"] = state ? state.protectionDomains : undefined;
            resourceInputs["sdcLists"] = state ? state.sdcLists : undefined;
            resourceInputs["sdrLists"] = state ? state.sdrLists : undefined;
            resourceInputs["sdsLists"] = state ? state.sdsLists : undefined;
            resourceInputs["storagePools"] = state ? state.storagePools : undefined;
        } else {
            const args = argsOrState as ClusterArgs | undefined;
            if ((!args || args.clusters === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusters'");
            }
            if ((!args || args.liaPassword === undefined) && !opts.urn) {
                throw new Error("Missing required property 'liaPassword'");
            }
            if ((!args || args.mdmPassword === undefined) && !opts.urn) {
                throw new Error("Missing required property 'mdmPassword'");
            }
            resourceInputs["allowNonSecureCommunicationWithLia"] = args ? args.allowNonSecureCommunicationWithLia : undefined;
            resourceInputs["allowNonSecureCommunicationWithMdm"] = args ? args.allowNonSecureCommunicationWithMdm : undefined;
            resourceInputs["clusters"] = args ? args.clusters : undefined;
            resourceInputs["disableNonMgmtComponentsAuth"] = args ? args.disableNonMgmtComponentsAuth : undefined;
            resourceInputs["liaPassword"] = args ? args.liaPassword : undefined;
            resourceInputs["mdmPassword"] = args ? args.mdmPassword : undefined;
            resourceInputs["storagePools"] = args ? args.storagePools : undefined;
            resourceInputs["mdmLists"] = undefined /*out*/;
            resourceInputs["protectionDomains"] = undefined /*out*/;
            resourceInputs["sdcLists"] = undefined /*out*/;
            resourceInputs["sdrLists"] = undefined /*out*/;
            resourceInputs["sdsLists"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Cluster.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Cluster resources.
 */
export interface ClusterState {
    /**
     * Allow Non Secure Communication With lia
     */
    allowNonSecureCommunicationWithLia?: pulumi.Input<boolean>;
    /**
     * Allow Non Secure Communication With MDM
     */
    allowNonSecureCommunicationWithMdm?: pulumi.Input<boolean>;
    /**
     * Cluster Installation Details
     */
    clusters?: pulumi.Input<pulumi.Input<inputs.ClusterCluster>[]>;
    /**
     * Disable Non Mgmt Components Auth
     */
    disableNonMgmtComponentsAuth?: pulumi.Input<boolean>;
    /**
     * Lia Password
     */
    liaPassword?: pulumi.Input<string>;
    /**
     * Cluster MDM Details
     */
    mdmLists?: pulumi.Input<pulumi.Input<inputs.ClusterMdmList>[]>;
    /**
     * MDM Password
     */
    mdmPassword?: pulumi.Input<string>;
    /**
     * Cluster Protection Domain Details
     */
    protectionDomains?: pulumi.Input<pulumi.Input<inputs.ClusterProtectionDomain>[]>;
    /**
     * Cluster SDC Details
     */
    sdcLists?: pulumi.Input<pulumi.Input<inputs.ClusterSdcList>[]>;
    /**
     * Cluster SDR Details
     */
    sdrLists?: pulumi.Input<pulumi.Input<inputs.ClusterSdrList>[]>;
    /**
     * Cluster SDS Details
     */
    sdsLists?: pulumi.Input<pulumi.Input<inputs.ClusterSdsList>[]>;
    /**
     * Storage Pool Details
     */
    storagePools?: pulumi.Input<pulumi.Input<inputs.ClusterStoragePool>[]>;
}

/**
 * The set of arguments for constructing a Cluster resource.
 */
export interface ClusterArgs {
    /**
     * Allow Non Secure Communication With lia
     */
    allowNonSecureCommunicationWithLia?: pulumi.Input<boolean>;
    /**
     * Allow Non Secure Communication With MDM
     */
    allowNonSecureCommunicationWithMdm?: pulumi.Input<boolean>;
    /**
     * Cluster Installation Details
     */
    clusters: pulumi.Input<pulumi.Input<inputs.ClusterCluster>[]>;
    /**
     * Disable Non Mgmt Components Auth
     */
    disableNonMgmtComponentsAuth?: pulumi.Input<boolean>;
    /**
     * Lia Password
     */
    liaPassword: pulumi.Input<string>;
    /**
     * MDM Password
     */
    mdmPassword: pulumi.Input<string>;
    /**
     * Storage Pool Details
     */
    storagePools?: pulumi.Input<pulumi.Input<inputs.ClusterStoragePool>[]>;
}
