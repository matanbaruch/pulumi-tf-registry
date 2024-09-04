// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ObjectFirewallProfileprotocoloptionsSmtp extends pulumi.CustomResource {
    /**
     * Get an existing ObjectFirewallProfileprotocoloptionsSmtp resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ObjectFirewallProfileprotocoloptionsSmtpState, opts?: pulumi.CustomResourceOptions): ObjectFirewallProfileprotocoloptionsSmtp {
        return new ObjectFirewallProfileprotocoloptionsSmtp(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortimanager:index/objectFirewallProfileprotocoloptionsSmtp:ObjectFirewallProfileprotocoloptionsSmtp';

    /**
     * Returns true if the given object is an instance of ObjectFirewallProfileprotocoloptionsSmtp.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ObjectFirewallProfileprotocoloptionsSmtp {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ObjectFirewallProfileprotocoloptionsSmtp.__pulumiType;
    }

    public readonly adom!: pulumi.Output<string | undefined>;
    public readonly inspectAll!: pulumi.Output<string>;
    public readonly options!: pulumi.Output<string[]>;
    public readonly oversizeLimit!: pulumi.Output<number>;
    public readonly ports!: pulumi.Output<number[]>;
    public readonly profileProtocolOptions!: pulumi.Output<string>;
    public readonly proxyAfterTcpHandshake!: pulumi.Output<string>;
    public readonly scanBzip2!: pulumi.Output<string>;
    public readonly scopetype!: pulumi.Output<string | undefined>;
    public readonly serverBusy!: pulumi.Output<string>;
    public readonly sslOffloaded!: pulumi.Output<string>;
    public readonly status!: pulumi.Output<string>;
    public readonly uncompressedNestLimit!: pulumi.Output<number>;
    public readonly uncompressedOversizeLimit!: pulumi.Output<number>;

    /**
     * Create a ObjectFirewallProfileprotocoloptionsSmtp resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ObjectFirewallProfileprotocoloptionsSmtpArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ObjectFirewallProfileprotocoloptionsSmtpArgs | ObjectFirewallProfileprotocoloptionsSmtpState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ObjectFirewallProfileprotocoloptionsSmtpState | undefined;
            resourceInputs["adom"] = state ? state.adom : undefined;
            resourceInputs["inspectAll"] = state ? state.inspectAll : undefined;
            resourceInputs["options"] = state ? state.options : undefined;
            resourceInputs["oversizeLimit"] = state ? state.oversizeLimit : undefined;
            resourceInputs["ports"] = state ? state.ports : undefined;
            resourceInputs["profileProtocolOptions"] = state ? state.profileProtocolOptions : undefined;
            resourceInputs["proxyAfterTcpHandshake"] = state ? state.proxyAfterTcpHandshake : undefined;
            resourceInputs["scanBzip2"] = state ? state.scanBzip2 : undefined;
            resourceInputs["scopetype"] = state ? state.scopetype : undefined;
            resourceInputs["serverBusy"] = state ? state.serverBusy : undefined;
            resourceInputs["sslOffloaded"] = state ? state.sslOffloaded : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["uncompressedNestLimit"] = state ? state.uncompressedNestLimit : undefined;
            resourceInputs["uncompressedOversizeLimit"] = state ? state.uncompressedOversizeLimit : undefined;
        } else {
            const args = argsOrState as ObjectFirewallProfileprotocoloptionsSmtpArgs | undefined;
            if ((!args || args.profileProtocolOptions === undefined) && !opts.urn) {
                throw new Error("Missing required property 'profileProtocolOptions'");
            }
            resourceInputs["adom"] = args ? args.adom : undefined;
            resourceInputs["inspectAll"] = args ? args.inspectAll : undefined;
            resourceInputs["options"] = args ? args.options : undefined;
            resourceInputs["oversizeLimit"] = args ? args.oversizeLimit : undefined;
            resourceInputs["ports"] = args ? args.ports : undefined;
            resourceInputs["profileProtocolOptions"] = args ? args.profileProtocolOptions : undefined;
            resourceInputs["proxyAfterTcpHandshake"] = args ? args.proxyAfterTcpHandshake : undefined;
            resourceInputs["scanBzip2"] = args ? args.scanBzip2 : undefined;
            resourceInputs["scopetype"] = args ? args.scopetype : undefined;
            resourceInputs["serverBusy"] = args ? args.serverBusy : undefined;
            resourceInputs["sslOffloaded"] = args ? args.sslOffloaded : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
            resourceInputs["uncompressedNestLimit"] = args ? args.uncompressedNestLimit : undefined;
            resourceInputs["uncompressedOversizeLimit"] = args ? args.uncompressedOversizeLimit : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ObjectFirewallProfileprotocoloptionsSmtp.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ObjectFirewallProfileprotocoloptionsSmtp resources.
 */
export interface ObjectFirewallProfileprotocoloptionsSmtpState {
    adom?: pulumi.Input<string>;
    inspectAll?: pulumi.Input<string>;
    options?: pulumi.Input<pulumi.Input<string>[]>;
    oversizeLimit?: pulumi.Input<number>;
    ports?: pulumi.Input<pulumi.Input<number>[]>;
    profileProtocolOptions?: pulumi.Input<string>;
    proxyAfterTcpHandshake?: pulumi.Input<string>;
    scanBzip2?: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
    serverBusy?: pulumi.Input<string>;
    sslOffloaded?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    uncompressedNestLimit?: pulumi.Input<number>;
    uncompressedOversizeLimit?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a ObjectFirewallProfileprotocoloptionsSmtp resource.
 */
export interface ObjectFirewallProfileprotocoloptionsSmtpArgs {
    adom?: pulumi.Input<string>;
    inspectAll?: pulumi.Input<string>;
    options?: pulumi.Input<pulumi.Input<string>[]>;
    oversizeLimit?: pulumi.Input<number>;
    ports?: pulumi.Input<pulumi.Input<number>[]>;
    profileProtocolOptions: pulumi.Input<string>;
    proxyAfterTcpHandshake?: pulumi.Input<string>;
    scanBzip2?: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
    serverBusy?: pulumi.Input<string>;
    sslOffloaded?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    uncompressedNestLimit?: pulumi.Input<number>;
    uncompressedOversizeLimit?: pulumi.Input<number>;
}
