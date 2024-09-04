// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class PrivateKey extends pulumi.CustomResource {
    /**
     * Get an existing PrivateKey resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PrivateKeyState, opts?: pulumi.CustomResourceOptions): PrivateKey {
        return new PrivateKey(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'rundeck:index/privateKey:PrivateKey';

    /**
     * Returns true if the given object is an instance of PrivateKey.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PrivateKey {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PrivateKey.__pulumiType;
    }

    /**
     * The private key material to store, in PEM format
     */
    public readonly keyMaterial!: pulumi.Output<string>;
    /**
     * Path to the key within the key store
     */
    public readonly path!: pulumi.Output<string>;

    /**
     * Create a PrivateKey resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PrivateKeyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PrivateKeyArgs | PrivateKeyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as PrivateKeyState | undefined;
            resourceInputs["keyMaterial"] = state ? state.keyMaterial : undefined;
            resourceInputs["path"] = state ? state.path : undefined;
        } else {
            const args = argsOrState as PrivateKeyArgs | undefined;
            if ((!args || args.keyMaterial === undefined) && !opts.urn) {
                throw new Error("Missing required property 'keyMaterial'");
            }
            if ((!args || args.path === undefined) && !opts.urn) {
                throw new Error("Missing required property 'path'");
            }
            resourceInputs["keyMaterial"] = args ? args.keyMaterial : undefined;
            resourceInputs["path"] = args ? args.path : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(PrivateKey.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering PrivateKey resources.
 */
export interface PrivateKeyState {
    /**
     * The private key material to store, in PEM format
     */
    keyMaterial?: pulumi.Input<string>;
    /**
     * Path to the key within the key store
     */
    path?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a PrivateKey resource.
 */
export interface PrivateKeyArgs {
    /**
     * The private key material to store, in PEM format
     */
    keyMaterial: pulumi.Input<string>;
    /**
     * Path to the key within the key store
     */
    path: pulumi.Input<string>;
}
