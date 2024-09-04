// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class KeyVaultKey extends pulumi.CustomResource {
    /**
     * Get an existing KeyVaultKey resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: KeyVaultKeyState, opts?: pulumi.CustomResourceOptions): KeyVaultKey {
        return new KeyVaultKey(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azurestack:index/keyVaultKey:KeyVaultKey';

    /**
     * Returns true if the given object is an instance of KeyVaultKey.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is KeyVaultKey {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === KeyVaultKey.__pulumiType;
    }

    public readonly curve!: pulumi.Output<string>;
    public /*out*/ readonly e!: pulumi.Output<string>;
    public readonly expirationDate!: pulumi.Output<string | undefined>;
    public readonly keyOpts!: pulumi.Output<string[]>;
    public readonly keySize!: pulumi.Output<number | undefined>;
    public readonly keyType!: pulumi.Output<string>;
    public readonly keyVaultId!: pulumi.Output<string>;
    public /*out*/ readonly n!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly notBeforeDate!: pulumi.Output<string | undefined>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.KeyVaultKeyTimeouts | undefined>;
    public /*out*/ readonly version!: pulumi.Output<string>;
    public /*out*/ readonly versionlessId!: pulumi.Output<string>;
    public /*out*/ readonly x!: pulumi.Output<string>;
    public /*out*/ readonly y!: pulumi.Output<string>;

    /**
     * Create a KeyVaultKey resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: KeyVaultKeyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: KeyVaultKeyArgs | KeyVaultKeyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as KeyVaultKeyState | undefined;
            resourceInputs["curve"] = state ? state.curve : undefined;
            resourceInputs["e"] = state ? state.e : undefined;
            resourceInputs["expirationDate"] = state ? state.expirationDate : undefined;
            resourceInputs["keyOpts"] = state ? state.keyOpts : undefined;
            resourceInputs["keySize"] = state ? state.keySize : undefined;
            resourceInputs["keyType"] = state ? state.keyType : undefined;
            resourceInputs["keyVaultId"] = state ? state.keyVaultId : undefined;
            resourceInputs["n"] = state ? state.n : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["notBeforeDate"] = state ? state.notBeforeDate : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["version"] = state ? state.version : undefined;
            resourceInputs["versionlessId"] = state ? state.versionlessId : undefined;
            resourceInputs["x"] = state ? state.x : undefined;
            resourceInputs["y"] = state ? state.y : undefined;
        } else {
            const args = argsOrState as KeyVaultKeyArgs | undefined;
            if ((!args || args.keyOpts === undefined) && !opts.urn) {
                throw new Error("Missing required property 'keyOpts'");
            }
            if ((!args || args.keyType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'keyType'");
            }
            if ((!args || args.keyVaultId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'keyVaultId'");
            }
            resourceInputs["curve"] = args ? args.curve : undefined;
            resourceInputs["expirationDate"] = args ? args.expirationDate : undefined;
            resourceInputs["keyOpts"] = args ? args.keyOpts : undefined;
            resourceInputs["keySize"] = args ? args.keySize : undefined;
            resourceInputs["keyType"] = args ? args.keyType : undefined;
            resourceInputs["keyVaultId"] = args ? args.keyVaultId : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["notBeforeDate"] = args ? args.notBeforeDate : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["e"] = undefined /*out*/;
            resourceInputs["n"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
            resourceInputs["versionlessId"] = undefined /*out*/;
            resourceInputs["x"] = undefined /*out*/;
            resourceInputs["y"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(KeyVaultKey.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering KeyVaultKey resources.
 */
export interface KeyVaultKeyState {
    curve?: pulumi.Input<string>;
    e?: pulumi.Input<string>;
    expirationDate?: pulumi.Input<string>;
    keyOpts?: pulumi.Input<pulumi.Input<string>[]>;
    keySize?: pulumi.Input<number>;
    keyType?: pulumi.Input<string>;
    keyVaultId?: pulumi.Input<string>;
    n?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    notBeforeDate?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.KeyVaultKeyTimeouts>;
    version?: pulumi.Input<string>;
    versionlessId?: pulumi.Input<string>;
    x?: pulumi.Input<string>;
    y?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a KeyVaultKey resource.
 */
export interface KeyVaultKeyArgs {
    curve?: pulumi.Input<string>;
    expirationDate?: pulumi.Input<string>;
    keyOpts: pulumi.Input<pulumi.Input<string>[]>;
    keySize?: pulumi.Input<number>;
    keyType: pulumi.Input<string>;
    keyVaultId: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    notBeforeDate?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.KeyVaultKeyTimeouts>;
}
