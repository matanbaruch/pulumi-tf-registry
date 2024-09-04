// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class BdsBdsInstanceApiKey extends pulumi.CustomResource {
    /**
     * Get an existing BdsBdsInstanceApiKey resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: BdsBdsInstanceApiKeyState, opts?: pulumi.CustomResourceOptions): BdsBdsInstanceApiKey {
        return new BdsBdsInstanceApiKey(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'oci:index/bdsBdsInstanceApiKey:BdsBdsInstanceApiKey';

    /**
     * Returns true if the given object is an instance of BdsBdsInstanceApiKey.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is BdsBdsInstanceApiKey {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === BdsBdsInstanceApiKey.__pulumiType;
    }

    public readonly bdsInstanceId!: pulumi.Output<string>;
    public readonly defaultRegion!: pulumi.Output<string>;
    public /*out*/ readonly fingerprint!: pulumi.Output<string>;
    public readonly keyAlias!: pulumi.Output<string>;
    public readonly passphrase!: pulumi.Output<string>;
    public /*out*/ readonly pemfilepath!: pulumi.Output<string>;
    public /*out*/ readonly state!: pulumi.Output<string>;
    public /*out*/ readonly tenantId!: pulumi.Output<string>;
    public /*out*/ readonly timeCreated!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.BdsBdsInstanceApiKeyTimeouts | undefined>;
    public readonly userId!: pulumi.Output<string>;

    /**
     * Create a BdsBdsInstanceApiKey resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BdsBdsInstanceApiKeyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: BdsBdsInstanceApiKeyArgs | BdsBdsInstanceApiKeyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as BdsBdsInstanceApiKeyState | undefined;
            resourceInputs["bdsInstanceId"] = state ? state.bdsInstanceId : undefined;
            resourceInputs["defaultRegion"] = state ? state.defaultRegion : undefined;
            resourceInputs["fingerprint"] = state ? state.fingerprint : undefined;
            resourceInputs["keyAlias"] = state ? state.keyAlias : undefined;
            resourceInputs["passphrase"] = state ? state.passphrase : undefined;
            resourceInputs["pemfilepath"] = state ? state.pemfilepath : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["tenantId"] = state ? state.tenantId : undefined;
            resourceInputs["timeCreated"] = state ? state.timeCreated : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["userId"] = state ? state.userId : undefined;
        } else {
            const args = argsOrState as BdsBdsInstanceApiKeyArgs | undefined;
            if ((!args || args.bdsInstanceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'bdsInstanceId'");
            }
            if ((!args || args.keyAlias === undefined) && !opts.urn) {
                throw new Error("Missing required property 'keyAlias'");
            }
            if ((!args || args.passphrase === undefined) && !opts.urn) {
                throw new Error("Missing required property 'passphrase'");
            }
            if ((!args || args.userId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'userId'");
            }
            resourceInputs["bdsInstanceId"] = args ? args.bdsInstanceId : undefined;
            resourceInputs["defaultRegion"] = args ? args.defaultRegion : undefined;
            resourceInputs["keyAlias"] = args ? args.keyAlias : undefined;
            resourceInputs["passphrase"] = args?.passphrase ? pulumi.secret(args.passphrase) : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["userId"] = args ? args.userId : undefined;
            resourceInputs["fingerprint"] = undefined /*out*/;
            resourceInputs["pemfilepath"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["tenantId"] = undefined /*out*/;
            resourceInputs["timeCreated"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["passphrase"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(BdsBdsInstanceApiKey.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering BdsBdsInstanceApiKey resources.
 */
export interface BdsBdsInstanceApiKeyState {
    bdsInstanceId?: pulumi.Input<string>;
    defaultRegion?: pulumi.Input<string>;
    fingerprint?: pulumi.Input<string>;
    keyAlias?: pulumi.Input<string>;
    passphrase?: pulumi.Input<string>;
    pemfilepath?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
    tenantId?: pulumi.Input<string>;
    timeCreated?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.BdsBdsInstanceApiKeyTimeouts>;
    userId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a BdsBdsInstanceApiKey resource.
 */
export interface BdsBdsInstanceApiKeyArgs {
    bdsInstanceId: pulumi.Input<string>;
    defaultRegion?: pulumi.Input<string>;
    keyAlias: pulumi.Input<string>;
    passphrase: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.BdsBdsInstanceApiKeyTimeouts>;
    userId: pulumi.Input<string>;
}
