// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Cgnv6LsnRadiusServer extends pulumi.CustomResource {
    /**
     * Get an existing Cgnv6LsnRadiusServer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: Cgnv6LsnRadiusServerState, opts?: pulumi.CustomResourceOptions): Cgnv6LsnRadiusServer {
        return new Cgnv6LsnRadiusServer(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/cgnv6LsnRadiusServer:Cgnv6LsnRadiusServer';

    /**
     * Returns true if the given object is an instance of Cgnv6LsnRadiusServer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Cgnv6LsnRadiusServer {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Cgnv6LsnRadiusServer.__pulumiType;
    }

    /**
     * 'ignore': Ignore (default); 'append-entry': Append the AVPs to existing entry; 'replace-entry': Replace the AVPs of
     * existing entry;
     */
    public readonly accountingInterimUpdate!: pulumi.Output<string | undefined>;
    /**
     * 'ignore': Ignore (default); 'delete-entries-using-attribute': Delete entries matching attribute in RADIUS Table;
     */
    public readonly accountingOn!: pulumi.Output<string | undefined>;
    /**
     * 'ignore': Ignore; 'append-entry': Append the AVPs to existing entry (default); 'replace-entry': Replace the AVPs of
     * existing entry;
     */
    public readonly accountingStart!: pulumi.Output<string | undefined>;
    /**
     * 'ignore': Ignore; 'delete-entry': Delete the entry (default); 'delete-entry-and-sessions': Delete the entry and data
     * sessions associated;
     */
    public readonly accountingStop!: pulumi.Output<string | undefined>;
    /**
     * 'msisdn': Clear using MSISDN; 'imei': Clear using IMEI; 'imsi': Clear using IMSI;
     */
    public readonly attributeName!: pulumi.Output<string | undefined>;
    public readonly attributes!: pulumi.Output<outputs.Cgnv6LsnRadiusServerAttribute[] | undefined>;
    /**
     * Clear using customized attribute
     */
    public readonly customAttributeName!: pulumi.Output<string | undefined>;
    /**
     * Toggle option for RADIUS reply packet(Default: Accounting response will be sent)
     */
    public readonly disableReply!: pulumi.Output<number | undefined>;
    /**
     * Configure the listen port of RADIUS server (Port number)
     */
    public readonly listenPort!: pulumi.Output<number | undefined>;
    public readonly remote!: pulumi.Output<outputs.Cgnv6LsnRadiusServerRemote | undefined>;
    public readonly samplingEnables!: pulumi.Output<outputs.Cgnv6LsnRadiusServerSamplingEnable[] | undefined>;
    /**
     * Configure shared secret
     */
    public readonly secret!: pulumi.Output<number | undefined>;
    /**
     * The RADIUS secret
     */
    public readonly secretString!: pulumi.Output<string | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;
    /**
     * Join a VRRP-A failover group
     */
    public readonly vrid!: pulumi.Output<number | undefined>;

    /**
     * Create a Cgnv6LsnRadiusServer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: Cgnv6LsnRadiusServerArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: Cgnv6LsnRadiusServerArgs | Cgnv6LsnRadiusServerState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as Cgnv6LsnRadiusServerState | undefined;
            resourceInputs["accountingInterimUpdate"] = state ? state.accountingInterimUpdate : undefined;
            resourceInputs["accountingOn"] = state ? state.accountingOn : undefined;
            resourceInputs["accountingStart"] = state ? state.accountingStart : undefined;
            resourceInputs["accountingStop"] = state ? state.accountingStop : undefined;
            resourceInputs["attributeName"] = state ? state.attributeName : undefined;
            resourceInputs["attributes"] = state ? state.attributes : undefined;
            resourceInputs["customAttributeName"] = state ? state.customAttributeName : undefined;
            resourceInputs["disableReply"] = state ? state.disableReply : undefined;
            resourceInputs["listenPort"] = state ? state.listenPort : undefined;
            resourceInputs["remote"] = state ? state.remote : undefined;
            resourceInputs["samplingEnables"] = state ? state.samplingEnables : undefined;
            resourceInputs["secret"] = state ? state.secret : undefined;
            resourceInputs["secretString"] = state ? state.secretString : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
            resourceInputs["vrid"] = state ? state.vrid : undefined;
        } else {
            const args = argsOrState as Cgnv6LsnRadiusServerArgs | undefined;
            resourceInputs["accountingInterimUpdate"] = args ? args.accountingInterimUpdate : undefined;
            resourceInputs["accountingOn"] = args ? args.accountingOn : undefined;
            resourceInputs["accountingStart"] = args ? args.accountingStart : undefined;
            resourceInputs["accountingStop"] = args ? args.accountingStop : undefined;
            resourceInputs["attributeName"] = args ? args.attributeName : undefined;
            resourceInputs["attributes"] = args ? args.attributes : undefined;
            resourceInputs["customAttributeName"] = args ? args.customAttributeName : undefined;
            resourceInputs["disableReply"] = args ? args.disableReply : undefined;
            resourceInputs["listenPort"] = args ? args.listenPort : undefined;
            resourceInputs["remote"] = args ? args.remote : undefined;
            resourceInputs["samplingEnables"] = args ? args.samplingEnables : undefined;
            resourceInputs["secret"] = args ? args.secret : undefined;
            resourceInputs["secretString"] = args ? args.secretString : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
            resourceInputs["vrid"] = args ? args.vrid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Cgnv6LsnRadiusServer.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Cgnv6LsnRadiusServer resources.
 */
export interface Cgnv6LsnRadiusServerState {
    /**
     * 'ignore': Ignore (default); 'append-entry': Append the AVPs to existing entry; 'replace-entry': Replace the AVPs of
     * existing entry;
     */
    accountingInterimUpdate?: pulumi.Input<string>;
    /**
     * 'ignore': Ignore (default); 'delete-entries-using-attribute': Delete entries matching attribute in RADIUS Table;
     */
    accountingOn?: pulumi.Input<string>;
    /**
     * 'ignore': Ignore; 'append-entry': Append the AVPs to existing entry (default); 'replace-entry': Replace the AVPs of
     * existing entry;
     */
    accountingStart?: pulumi.Input<string>;
    /**
     * 'ignore': Ignore; 'delete-entry': Delete the entry (default); 'delete-entry-and-sessions': Delete the entry and data
     * sessions associated;
     */
    accountingStop?: pulumi.Input<string>;
    /**
     * 'msisdn': Clear using MSISDN; 'imei': Clear using IMEI; 'imsi': Clear using IMSI;
     */
    attributeName?: pulumi.Input<string>;
    attributes?: pulumi.Input<pulumi.Input<inputs.Cgnv6LsnRadiusServerAttribute>[]>;
    /**
     * Clear using customized attribute
     */
    customAttributeName?: pulumi.Input<string>;
    /**
     * Toggle option for RADIUS reply packet(Default: Accounting response will be sent)
     */
    disableReply?: pulumi.Input<number>;
    /**
     * Configure the listen port of RADIUS server (Port number)
     */
    listenPort?: pulumi.Input<number>;
    remote?: pulumi.Input<inputs.Cgnv6LsnRadiusServerRemote>;
    samplingEnables?: pulumi.Input<pulumi.Input<inputs.Cgnv6LsnRadiusServerSamplingEnable>[]>;
    /**
     * Configure shared secret
     */
    secret?: pulumi.Input<number>;
    /**
     * The RADIUS secret
     */
    secretString?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
    /**
     * Join a VRRP-A failover group
     */
    vrid?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a Cgnv6LsnRadiusServer resource.
 */
export interface Cgnv6LsnRadiusServerArgs {
    /**
     * 'ignore': Ignore (default); 'append-entry': Append the AVPs to existing entry; 'replace-entry': Replace the AVPs of
     * existing entry;
     */
    accountingInterimUpdate?: pulumi.Input<string>;
    /**
     * 'ignore': Ignore (default); 'delete-entries-using-attribute': Delete entries matching attribute in RADIUS Table;
     */
    accountingOn?: pulumi.Input<string>;
    /**
     * 'ignore': Ignore; 'append-entry': Append the AVPs to existing entry (default); 'replace-entry': Replace the AVPs of
     * existing entry;
     */
    accountingStart?: pulumi.Input<string>;
    /**
     * 'ignore': Ignore; 'delete-entry': Delete the entry (default); 'delete-entry-and-sessions': Delete the entry and data
     * sessions associated;
     */
    accountingStop?: pulumi.Input<string>;
    /**
     * 'msisdn': Clear using MSISDN; 'imei': Clear using IMEI; 'imsi': Clear using IMSI;
     */
    attributeName?: pulumi.Input<string>;
    attributes?: pulumi.Input<pulumi.Input<inputs.Cgnv6LsnRadiusServerAttribute>[]>;
    /**
     * Clear using customized attribute
     */
    customAttributeName?: pulumi.Input<string>;
    /**
     * Toggle option for RADIUS reply packet(Default: Accounting response will be sent)
     */
    disableReply?: pulumi.Input<number>;
    /**
     * Configure the listen port of RADIUS server (Port number)
     */
    listenPort?: pulumi.Input<number>;
    remote?: pulumi.Input<inputs.Cgnv6LsnRadiusServerRemote>;
    samplingEnables?: pulumi.Input<pulumi.Input<inputs.Cgnv6LsnRadiusServerSamplingEnable>[]>;
    /**
     * Configure shared secret
     */
    secret?: pulumi.Input<number>;
    /**
     * The RADIUS secret
     */
    secretString?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
    /**
     * Join a VRRP-A failover group
     */
    vrid?: pulumi.Input<number>;
}
