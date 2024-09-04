// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class KmsClientKey extends pulumi.CustomResource {
    /**
     * Get an existing KmsClientKey resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: KmsClientKeyState, opts?: pulumi.CustomResourceOptions): KmsClientKey {
        return new KmsClientKey(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'alicloud:index/kmsClientKey:KmsClientKey';

    /**
     * Returns true if the given object is an instance of KmsClientKey.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is KmsClientKey {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === KmsClientKey.__pulumiType;
    }

    public readonly aapName!: pulumi.Output<string>;
    public /*out*/ readonly createTime!: pulumi.Output<string>;
    public readonly notAfter!: pulumi.Output<string | undefined>;
    public readonly notBefore!: pulumi.Output<string | undefined>;
    public readonly password!: pulumi.Output<string>;
    public readonly privateKeyDataFile!: pulumi.Output<string | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.KmsClientKeyTimeouts | undefined>;

    /**
     * Create a KmsClientKey resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: KmsClientKeyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: KmsClientKeyArgs | KmsClientKeyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as KmsClientKeyState | undefined;
            resourceInputs["aapName"] = state ? state.aapName : undefined;
            resourceInputs["createTime"] = state ? state.createTime : undefined;
            resourceInputs["notAfter"] = state ? state.notAfter : undefined;
            resourceInputs["notBefore"] = state ? state.notBefore : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["privateKeyDataFile"] = state ? state.privateKeyDataFile : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as KmsClientKeyArgs | undefined;
            if ((!args || args.aapName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'aapName'");
            }
            if ((!args || args.password === undefined) && !opts.urn) {
                throw new Error("Missing required property 'password'");
            }
            resourceInputs["aapName"] = args ? args.aapName : undefined;
            resourceInputs["notAfter"] = args ? args.notAfter : undefined;
            resourceInputs["notBefore"] = args ? args.notBefore : undefined;
            resourceInputs["password"] = args?.password ? pulumi.secret(args.password) : undefined;
            resourceInputs["privateKeyDataFile"] = args ? args.privateKeyDataFile : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["createTime"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["password"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(KmsClientKey.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering KmsClientKey resources.
 */
export interface KmsClientKeyState {
    aapName?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    notAfter?: pulumi.Input<string>;
    notBefore?: pulumi.Input<string>;
    password?: pulumi.Input<string>;
    privateKeyDataFile?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.KmsClientKeyTimeouts>;
}

/**
 * The set of arguments for constructing a KmsClientKey resource.
 */
export interface KmsClientKeyArgs {
    aapName: pulumi.Input<string>;
    notAfter?: pulumi.Input<string>;
    notBefore?: pulumi.Input<string>;
    password: pulumi.Input<string>;
    privateKeyDataFile?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.KmsClientKeyTimeouts>;
}
