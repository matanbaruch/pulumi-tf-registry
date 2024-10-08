// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ObjectUserTacacs extends pulumi.CustomResource {
    /**
     * Get an existing ObjectUserTacacs resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ObjectUserTacacsState, opts?: pulumi.CustomResourceOptions): ObjectUserTacacs {
        return new ObjectUserTacacs(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortimanager:index/objectUserTacacs:ObjectUserTacacs';

    /**
     * Returns true if the given object is an instance of ObjectUserTacacs.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ObjectUserTacacs {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ObjectUserTacacs.__pulumiType;
    }

    public readonly adom!: pulumi.Output<string | undefined>;
    public readonly authenType!: pulumi.Output<string>;
    public readonly authorization!: pulumi.Output<string>;
    public readonly dynamicMappings!: pulumi.Output<outputs.ObjectUserTacacsDynamicMapping[] | undefined>;
    public readonly dynamicSortSubtable!: pulumi.Output<string | undefined>;
    public readonly interface!: pulumi.Output<string | undefined>;
    public readonly interfaceSelectMethod!: pulumi.Output<string>;
    public readonly keys!: pulumi.Output<string[]>;
    public readonly name!: pulumi.Output<string>;
    public readonly port!: pulumi.Output<number>;
    public readonly scopetype!: pulumi.Output<string | undefined>;
    public readonly secondaryKeys!: pulumi.Output<string[]>;
    public readonly secondaryServer!: pulumi.Output<string | undefined>;
    public readonly server!: pulumi.Output<string | undefined>;
    public readonly sourceIp!: pulumi.Output<string | undefined>;
    public readonly statusTtl!: pulumi.Output<number>;
    public readonly tertiaryKeys!: pulumi.Output<string[]>;
    public readonly tertiaryServer!: pulumi.Output<string | undefined>;

    /**
     * Create a ObjectUserTacacs resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ObjectUserTacacsArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ObjectUserTacacsArgs | ObjectUserTacacsState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ObjectUserTacacsState | undefined;
            resourceInputs["adom"] = state ? state.adom : undefined;
            resourceInputs["authenType"] = state ? state.authenType : undefined;
            resourceInputs["authorization"] = state ? state.authorization : undefined;
            resourceInputs["dynamicMappings"] = state ? state.dynamicMappings : undefined;
            resourceInputs["dynamicSortSubtable"] = state ? state.dynamicSortSubtable : undefined;
            resourceInputs["interface"] = state ? state.interface : undefined;
            resourceInputs["interfaceSelectMethod"] = state ? state.interfaceSelectMethod : undefined;
            resourceInputs["keys"] = state ? state.keys : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["port"] = state ? state.port : undefined;
            resourceInputs["scopetype"] = state ? state.scopetype : undefined;
            resourceInputs["secondaryKeys"] = state ? state.secondaryKeys : undefined;
            resourceInputs["secondaryServer"] = state ? state.secondaryServer : undefined;
            resourceInputs["server"] = state ? state.server : undefined;
            resourceInputs["sourceIp"] = state ? state.sourceIp : undefined;
            resourceInputs["statusTtl"] = state ? state.statusTtl : undefined;
            resourceInputs["tertiaryKeys"] = state ? state.tertiaryKeys : undefined;
            resourceInputs["tertiaryServer"] = state ? state.tertiaryServer : undefined;
        } else {
            const args = argsOrState as ObjectUserTacacsArgs | undefined;
            resourceInputs["adom"] = args ? args.adom : undefined;
            resourceInputs["authenType"] = args ? args.authenType : undefined;
            resourceInputs["authorization"] = args ? args.authorization : undefined;
            resourceInputs["dynamicMappings"] = args ? args.dynamicMappings : undefined;
            resourceInputs["dynamicSortSubtable"] = args ? args.dynamicSortSubtable : undefined;
            resourceInputs["interface"] = args ? args.interface : undefined;
            resourceInputs["interfaceSelectMethod"] = args ? args.interfaceSelectMethod : undefined;
            resourceInputs["keys"] = args?.keys ? pulumi.secret(args.keys) : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["port"] = args ? args.port : undefined;
            resourceInputs["scopetype"] = args ? args.scopetype : undefined;
            resourceInputs["secondaryKeys"] = args?.secondaryKeys ? pulumi.secret(args.secondaryKeys) : undefined;
            resourceInputs["secondaryServer"] = args ? args.secondaryServer : undefined;
            resourceInputs["server"] = args ? args.server : undefined;
            resourceInputs["sourceIp"] = args ? args.sourceIp : undefined;
            resourceInputs["statusTtl"] = args ? args.statusTtl : undefined;
            resourceInputs["tertiaryKeys"] = args?.tertiaryKeys ? pulumi.secret(args.tertiaryKeys) : undefined;
            resourceInputs["tertiaryServer"] = args ? args.tertiaryServer : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["keys", "secondaryKeys", "tertiaryKeys"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(ObjectUserTacacs.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ObjectUserTacacs resources.
 */
export interface ObjectUserTacacsState {
    adom?: pulumi.Input<string>;
    authenType?: pulumi.Input<string>;
    authorization?: pulumi.Input<string>;
    dynamicMappings?: pulumi.Input<pulumi.Input<inputs.ObjectUserTacacsDynamicMapping>[]>;
    dynamicSortSubtable?: pulumi.Input<string>;
    interface?: pulumi.Input<string>;
    interfaceSelectMethod?: pulumi.Input<string>;
    keys?: pulumi.Input<pulumi.Input<string>[]>;
    name?: pulumi.Input<string>;
    port?: pulumi.Input<number>;
    scopetype?: pulumi.Input<string>;
    secondaryKeys?: pulumi.Input<pulumi.Input<string>[]>;
    secondaryServer?: pulumi.Input<string>;
    server?: pulumi.Input<string>;
    sourceIp?: pulumi.Input<string>;
    statusTtl?: pulumi.Input<number>;
    tertiaryKeys?: pulumi.Input<pulumi.Input<string>[]>;
    tertiaryServer?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ObjectUserTacacs resource.
 */
export interface ObjectUserTacacsArgs {
    adom?: pulumi.Input<string>;
    authenType?: pulumi.Input<string>;
    authorization?: pulumi.Input<string>;
    dynamicMappings?: pulumi.Input<pulumi.Input<inputs.ObjectUserTacacsDynamicMapping>[]>;
    dynamicSortSubtable?: pulumi.Input<string>;
    interface?: pulumi.Input<string>;
    interfaceSelectMethod?: pulumi.Input<string>;
    keys?: pulumi.Input<pulumi.Input<string>[]>;
    name?: pulumi.Input<string>;
    port?: pulumi.Input<number>;
    scopetype?: pulumi.Input<string>;
    secondaryKeys?: pulumi.Input<pulumi.Input<string>[]>;
    secondaryServer?: pulumi.Input<string>;
    server?: pulumi.Input<string>;
    sourceIp?: pulumi.Input<string>;
    statusTtl?: pulumi.Input<number>;
    tertiaryKeys?: pulumi.Input<pulumi.Input<string>[]>;
    tertiaryServer?: pulumi.Input<string>;
}
