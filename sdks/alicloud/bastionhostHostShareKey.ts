// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class BastionhostHostShareKey extends pulumi.CustomResource {
    /**
     * Get an existing BastionhostHostShareKey resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: BastionhostHostShareKeyState, opts?: pulumi.CustomResourceOptions): BastionhostHostShareKey {
        return new BastionhostHostShareKey(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'alicloud:index/bastionhostHostShareKey:BastionhostHostShareKey';

    /**
     * Returns true if the given object is an instance of BastionhostHostShareKey.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is BastionhostHostShareKey {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === BastionhostHostShareKey.__pulumiType;
    }

    public /*out*/ readonly hostShareKeyId!: pulumi.Output<string>;
    public readonly hostShareKeyName!: pulumi.Output<string>;
    public readonly instanceId!: pulumi.Output<string>;
    public readonly passPhrase!: pulumi.Output<string | undefined>;
    public readonly privateKey!: pulumi.Output<string>;
    public /*out*/ readonly privateKeyFingerPrint!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.BastionhostHostShareKeyTimeouts | undefined>;

    /**
     * Create a BastionhostHostShareKey resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BastionhostHostShareKeyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: BastionhostHostShareKeyArgs | BastionhostHostShareKeyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as BastionhostHostShareKeyState | undefined;
            resourceInputs["hostShareKeyId"] = state ? state.hostShareKeyId : undefined;
            resourceInputs["hostShareKeyName"] = state ? state.hostShareKeyName : undefined;
            resourceInputs["instanceId"] = state ? state.instanceId : undefined;
            resourceInputs["passPhrase"] = state ? state.passPhrase : undefined;
            resourceInputs["privateKey"] = state ? state.privateKey : undefined;
            resourceInputs["privateKeyFingerPrint"] = state ? state.privateKeyFingerPrint : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as BastionhostHostShareKeyArgs | undefined;
            if ((!args || args.hostShareKeyName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'hostShareKeyName'");
            }
            if ((!args || args.instanceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'instanceId'");
            }
            if ((!args || args.privateKey === undefined) && !opts.urn) {
                throw new Error("Missing required property 'privateKey'");
            }
            resourceInputs["hostShareKeyName"] = args ? args.hostShareKeyName : undefined;
            resourceInputs["instanceId"] = args ? args.instanceId : undefined;
            resourceInputs["passPhrase"] = args?.passPhrase ? pulumi.secret(args.passPhrase) : undefined;
            resourceInputs["privateKey"] = args?.privateKey ? pulumi.secret(args.privateKey) : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["hostShareKeyId"] = undefined /*out*/;
            resourceInputs["privateKeyFingerPrint"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["passPhrase", "privateKey"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(BastionhostHostShareKey.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering BastionhostHostShareKey resources.
 */
export interface BastionhostHostShareKeyState {
    hostShareKeyId?: pulumi.Input<string>;
    hostShareKeyName?: pulumi.Input<string>;
    instanceId?: pulumi.Input<string>;
    passPhrase?: pulumi.Input<string>;
    privateKey?: pulumi.Input<string>;
    privateKeyFingerPrint?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.BastionhostHostShareKeyTimeouts>;
}

/**
 * The set of arguments for constructing a BastionhostHostShareKey resource.
 */
export interface BastionhostHostShareKeyArgs {
    hostShareKeyName: pulumi.Input<string>;
    instanceId: pulumi.Input<string>;
    passPhrase?: pulumi.Input<string>;
    privateKey: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.BastionhostHostShareKeyTimeouts>;
}
