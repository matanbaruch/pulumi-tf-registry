// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class PackagesCentralDnat6Move extends pulumi.CustomResource {
    /**
     * Get an existing PackagesCentralDnat6Move resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PackagesCentralDnat6MoveState, opts?: pulumi.CustomResourceOptions): PackagesCentralDnat6Move {
        return new PackagesCentralDnat6Move(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortimanager:index/packagesCentralDnat6Move:PackagesCentralDnat6Move';

    /**
     * Returns true if the given object is an instance of PackagesCentralDnat6Move.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PackagesCentralDnat6Move {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PackagesCentralDnat6Move.__pulumiType;
    }

    public readonly adom!: pulumi.Output<string | undefined>;
    public readonly dnat6!: pulumi.Output<string>;
    public readonly option!: pulumi.Output<string>;
    public readonly pkg!: pulumi.Output<string>;
    public readonly pkgFolderPath!: pulumi.Output<string | undefined>;
    public readonly scopetype!: pulumi.Output<string | undefined>;
    public readonly statePos!: pulumi.Output<string>;
    public readonly target!: pulumi.Output<string>;

    /**
     * Create a PackagesCentralDnat6Move resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PackagesCentralDnat6MoveArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PackagesCentralDnat6MoveArgs | PackagesCentralDnat6MoveState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as PackagesCentralDnat6MoveState | undefined;
            resourceInputs["adom"] = state ? state.adom : undefined;
            resourceInputs["dnat6"] = state ? state.dnat6 : undefined;
            resourceInputs["option"] = state ? state.option : undefined;
            resourceInputs["pkg"] = state ? state.pkg : undefined;
            resourceInputs["pkgFolderPath"] = state ? state.pkgFolderPath : undefined;
            resourceInputs["scopetype"] = state ? state.scopetype : undefined;
            resourceInputs["statePos"] = state ? state.statePos : undefined;
            resourceInputs["target"] = state ? state.target : undefined;
        } else {
            const args = argsOrState as PackagesCentralDnat6MoveArgs | undefined;
            if ((!args || args.dnat6 === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dnat6'");
            }
            if ((!args || args.option === undefined) && !opts.urn) {
                throw new Error("Missing required property 'option'");
            }
            if ((!args || args.pkg === undefined) && !opts.urn) {
                throw new Error("Missing required property 'pkg'");
            }
            if ((!args || args.target === undefined) && !opts.urn) {
                throw new Error("Missing required property 'target'");
            }
            resourceInputs["adom"] = args ? args.adom : undefined;
            resourceInputs["dnat6"] = args ? args.dnat6 : undefined;
            resourceInputs["option"] = args ? args.option : undefined;
            resourceInputs["pkg"] = args ? args.pkg : undefined;
            resourceInputs["pkgFolderPath"] = args ? args.pkgFolderPath : undefined;
            resourceInputs["scopetype"] = args ? args.scopetype : undefined;
            resourceInputs["statePos"] = args ? args.statePos : undefined;
            resourceInputs["target"] = args ? args.target : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(PackagesCentralDnat6Move.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering PackagesCentralDnat6Move resources.
 */
export interface PackagesCentralDnat6MoveState {
    adom?: pulumi.Input<string>;
    dnat6?: pulumi.Input<string>;
    option?: pulumi.Input<string>;
    pkg?: pulumi.Input<string>;
    pkgFolderPath?: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
    statePos?: pulumi.Input<string>;
    target?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a PackagesCentralDnat6Move resource.
 */
export interface PackagesCentralDnat6MoveArgs {
    adom?: pulumi.Input<string>;
    dnat6: pulumi.Input<string>;
    option: pulumi.Input<string>;
    pkg: pulumi.Input<string>;
    pkgFolderPath?: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
    statePos?: pulumi.Input<string>;
    target: pulumi.Input<string>;
}
