// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ClusterPeersResource extends pulumi.CustomResource {
    /**
     * Get an existing ClusterPeersResource resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ClusterPeersResourceState, opts?: pulumi.CustomResourceOptions): ClusterPeersResource {
        return new ClusterPeersResource(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'netapp-ontap:index/clusterPeersResource:ClusterPeersResource';

    /**
     * Returns true if the given object is an instance of ClusterPeersResource.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ClusterPeersResource {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ClusterPeersResource.__pulumiType;
    }

    /**
     * Connection profile name
     */
    public readonly cxProfileName!: pulumi.Output<string>;
    /**
     * When true, ONTAP automatically generates a passphrase to authenticate cluster peers
     */
    public readonly generatePassphrase!: pulumi.Output<boolean | undefined>;
    /**
     * Name of the peering relationship or name of the remote peer
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * User generated passphrase for use in authentication
     */
    public readonly passphrase!: pulumi.Output<string | undefined>;
    /**
     * SVM peering applications
     */
    public readonly peerApplications!: pulumi.Output<string[] | undefined>;
    /**
     * Peer connection profile name, to be accepted from peer side to make the status OK
     */
    public readonly peerCxProfileName!: pulumi.Output<string>;
    /**
     * ClusterPeers destination UUID
     */
    public /*out*/ readonly peerId!: pulumi.Output<string>;
    /**
     * Remote cluster details for cluster peer
     */
    public readonly remote!: pulumi.Output<outputs.ClusterPeersResourceRemote>;
    /**
     * Source cluster details for cluster peer from remote cluster
     */
    public readonly sourceDetails!: pulumi.Output<outputs.ClusterPeersResourceSourceDetails>;
    public /*out*/ readonly state!: pulumi.Output<string>;

    /**
     * Create a ClusterPeersResource resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ClusterPeersResourceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ClusterPeersResourceArgs | ClusterPeersResourceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ClusterPeersResourceState | undefined;
            resourceInputs["cxProfileName"] = state ? state.cxProfileName : undefined;
            resourceInputs["generatePassphrase"] = state ? state.generatePassphrase : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["passphrase"] = state ? state.passphrase : undefined;
            resourceInputs["peerApplications"] = state ? state.peerApplications : undefined;
            resourceInputs["peerCxProfileName"] = state ? state.peerCxProfileName : undefined;
            resourceInputs["peerId"] = state ? state.peerId : undefined;
            resourceInputs["remote"] = state ? state.remote : undefined;
            resourceInputs["sourceDetails"] = state ? state.sourceDetails : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
        } else {
            const args = argsOrState as ClusterPeersResourceArgs | undefined;
            if ((!args || args.cxProfileName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'cxProfileName'");
            }
            if ((!args || args.peerCxProfileName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'peerCxProfileName'");
            }
            if ((!args || args.remote === undefined) && !opts.urn) {
                throw new Error("Missing required property 'remote'");
            }
            if ((!args || args.sourceDetails === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sourceDetails'");
            }
            resourceInputs["cxProfileName"] = args ? args.cxProfileName : undefined;
            resourceInputs["generatePassphrase"] = args ? args.generatePassphrase : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["passphrase"] = args?.passphrase ? pulumi.secret(args.passphrase) : undefined;
            resourceInputs["peerApplications"] = args ? args.peerApplications : undefined;
            resourceInputs["peerCxProfileName"] = args ? args.peerCxProfileName : undefined;
            resourceInputs["remote"] = args ? args.remote : undefined;
            resourceInputs["sourceDetails"] = args ? args.sourceDetails : undefined;
            resourceInputs["peerId"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["passphrase"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(ClusterPeersResource.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ClusterPeersResource resources.
 */
export interface ClusterPeersResourceState {
    /**
     * Connection profile name
     */
    cxProfileName?: pulumi.Input<string>;
    /**
     * When true, ONTAP automatically generates a passphrase to authenticate cluster peers
     */
    generatePassphrase?: pulumi.Input<boolean>;
    /**
     * Name of the peering relationship or name of the remote peer
     */
    name?: pulumi.Input<string>;
    /**
     * User generated passphrase for use in authentication
     */
    passphrase?: pulumi.Input<string>;
    /**
     * SVM peering applications
     */
    peerApplications?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Peer connection profile name, to be accepted from peer side to make the status OK
     */
    peerCxProfileName?: pulumi.Input<string>;
    /**
     * ClusterPeers destination UUID
     */
    peerId?: pulumi.Input<string>;
    /**
     * Remote cluster details for cluster peer
     */
    remote?: pulumi.Input<inputs.ClusterPeersResourceRemote>;
    /**
     * Source cluster details for cluster peer from remote cluster
     */
    sourceDetails?: pulumi.Input<inputs.ClusterPeersResourceSourceDetails>;
    state?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ClusterPeersResource resource.
 */
export interface ClusterPeersResourceArgs {
    /**
     * Connection profile name
     */
    cxProfileName: pulumi.Input<string>;
    /**
     * When true, ONTAP automatically generates a passphrase to authenticate cluster peers
     */
    generatePassphrase?: pulumi.Input<boolean>;
    /**
     * Name of the peering relationship or name of the remote peer
     */
    name?: pulumi.Input<string>;
    /**
     * User generated passphrase for use in authentication
     */
    passphrase?: pulumi.Input<string>;
    /**
     * SVM peering applications
     */
    peerApplications?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Peer connection profile name, to be accepted from peer side to make the status OK
     */
    peerCxProfileName: pulumi.Input<string>;
    /**
     * Remote cluster details for cluster peer
     */
    remote: pulumi.Input<inputs.ClusterPeersResourceRemote>;
    /**
     * Source cluster details for cluster peer from remote cluster
     */
    sourceDetails: pulumi.Input<inputs.ClusterPeersResourceSourceDetails>;
}
