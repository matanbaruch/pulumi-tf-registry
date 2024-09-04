// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ObjectFirewallAccessproxyApigateway6Quic extends pulumi.CustomResource {
    /**
     * Get an existing ObjectFirewallAccessproxyApigateway6Quic resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ObjectFirewallAccessproxyApigateway6QuicState, opts?: pulumi.CustomResourceOptions): ObjectFirewallAccessproxyApigateway6Quic {
        return new ObjectFirewallAccessproxyApigateway6Quic(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortimanager:index/objectFirewallAccessproxyApigateway6Quic:ObjectFirewallAccessproxyApigateway6Quic';

    /**
     * Returns true if the given object is an instance of ObjectFirewallAccessproxyApigateway6Quic.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ObjectFirewallAccessproxyApigateway6Quic {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ObjectFirewallAccessproxyApigateway6Quic.__pulumiType;
    }

    public readonly accessProxy!: pulumi.Output<string>;
    public readonly ackDelayExponent!: pulumi.Output<number>;
    public readonly activeConnectionIdLimit!: pulumi.Output<number>;
    public readonly activeMigration!: pulumi.Output<string>;
    public readonly adom!: pulumi.Output<string | undefined>;
    public readonly apiGateway6!: pulumi.Output<string>;
    public readonly greaseQuicBit!: pulumi.Output<string>;
    public readonly maxAckDelay!: pulumi.Output<number>;
    public readonly maxDatagramFrameSize!: pulumi.Output<number>;
    public readonly maxIdleTimeout!: pulumi.Output<number>;
    public readonly maxUdpPayloadSize!: pulumi.Output<number>;
    public readonly scopetype!: pulumi.Output<string | undefined>;

    /**
     * Create a ObjectFirewallAccessproxyApigateway6Quic resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ObjectFirewallAccessproxyApigateway6QuicArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ObjectFirewallAccessproxyApigateway6QuicArgs | ObjectFirewallAccessproxyApigateway6QuicState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ObjectFirewallAccessproxyApigateway6QuicState | undefined;
            resourceInputs["accessProxy"] = state ? state.accessProxy : undefined;
            resourceInputs["ackDelayExponent"] = state ? state.ackDelayExponent : undefined;
            resourceInputs["activeConnectionIdLimit"] = state ? state.activeConnectionIdLimit : undefined;
            resourceInputs["activeMigration"] = state ? state.activeMigration : undefined;
            resourceInputs["adom"] = state ? state.adom : undefined;
            resourceInputs["apiGateway6"] = state ? state.apiGateway6 : undefined;
            resourceInputs["greaseQuicBit"] = state ? state.greaseQuicBit : undefined;
            resourceInputs["maxAckDelay"] = state ? state.maxAckDelay : undefined;
            resourceInputs["maxDatagramFrameSize"] = state ? state.maxDatagramFrameSize : undefined;
            resourceInputs["maxIdleTimeout"] = state ? state.maxIdleTimeout : undefined;
            resourceInputs["maxUdpPayloadSize"] = state ? state.maxUdpPayloadSize : undefined;
            resourceInputs["scopetype"] = state ? state.scopetype : undefined;
        } else {
            const args = argsOrState as ObjectFirewallAccessproxyApigateway6QuicArgs | undefined;
            if ((!args || args.accessProxy === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accessProxy'");
            }
            if ((!args || args.apiGateway6 === undefined) && !opts.urn) {
                throw new Error("Missing required property 'apiGateway6'");
            }
            resourceInputs["accessProxy"] = args ? args.accessProxy : undefined;
            resourceInputs["ackDelayExponent"] = args ? args.ackDelayExponent : undefined;
            resourceInputs["activeConnectionIdLimit"] = args ? args.activeConnectionIdLimit : undefined;
            resourceInputs["activeMigration"] = args ? args.activeMigration : undefined;
            resourceInputs["adom"] = args ? args.adom : undefined;
            resourceInputs["apiGateway6"] = args ? args.apiGateway6 : undefined;
            resourceInputs["greaseQuicBit"] = args ? args.greaseQuicBit : undefined;
            resourceInputs["maxAckDelay"] = args ? args.maxAckDelay : undefined;
            resourceInputs["maxDatagramFrameSize"] = args ? args.maxDatagramFrameSize : undefined;
            resourceInputs["maxIdleTimeout"] = args ? args.maxIdleTimeout : undefined;
            resourceInputs["maxUdpPayloadSize"] = args ? args.maxUdpPayloadSize : undefined;
            resourceInputs["scopetype"] = args ? args.scopetype : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ObjectFirewallAccessproxyApigateway6Quic.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ObjectFirewallAccessproxyApigateway6Quic resources.
 */
export interface ObjectFirewallAccessproxyApigateway6QuicState {
    accessProxy?: pulumi.Input<string>;
    ackDelayExponent?: pulumi.Input<number>;
    activeConnectionIdLimit?: pulumi.Input<number>;
    activeMigration?: pulumi.Input<string>;
    adom?: pulumi.Input<string>;
    apiGateway6?: pulumi.Input<string>;
    greaseQuicBit?: pulumi.Input<string>;
    maxAckDelay?: pulumi.Input<number>;
    maxDatagramFrameSize?: pulumi.Input<number>;
    maxIdleTimeout?: pulumi.Input<number>;
    maxUdpPayloadSize?: pulumi.Input<number>;
    scopetype?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ObjectFirewallAccessproxyApigateway6Quic resource.
 */
export interface ObjectFirewallAccessproxyApigateway6QuicArgs {
    accessProxy: pulumi.Input<string>;
    ackDelayExponent?: pulumi.Input<number>;
    activeConnectionIdLimit?: pulumi.Input<number>;
    activeMigration?: pulumi.Input<string>;
    adom?: pulumi.Input<string>;
    apiGateway6: pulumi.Input<string>;
    greaseQuicBit?: pulumi.Input<string>;
    maxAckDelay?: pulumi.Input<number>;
    maxDatagramFrameSize?: pulumi.Input<number>;
    maxIdleTimeout?: pulumi.Input<number>;
    maxUdpPayloadSize?: pulumi.Input<number>;
    scopetype?: pulumi.Input<string>;
}
