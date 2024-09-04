// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class PackagesCentralDnat extends pulumi.CustomResource {
    /**
     * Get an existing PackagesCentralDnat resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PackagesCentralDnatState, opts?: pulumi.CustomResourceOptions): PackagesCentralDnat {
        return new PackagesCentralDnat(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortimanager:index/packagesCentralDnat:PackagesCentralDnat';

    /**
     * Returns true if the given object is an instance of PackagesCentralDnat.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PackagesCentralDnat {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PackagesCentralDnat.__pulumiType;
    }

    public readonly adom!: pulumi.Output<string | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly pkg!: pulumi.Output<string>;
    public readonly pkgFolderPath!: pulumi.Output<string | undefined>;
    public readonly scopetype!: pulumi.Output<string | undefined>;

    /**
     * Create a PackagesCentralDnat resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PackagesCentralDnatArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PackagesCentralDnatArgs | PackagesCentralDnatState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as PackagesCentralDnatState | undefined;
            resourceInputs["adom"] = state ? state.adom : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["pkg"] = state ? state.pkg : undefined;
            resourceInputs["pkgFolderPath"] = state ? state.pkgFolderPath : undefined;
            resourceInputs["scopetype"] = state ? state.scopetype : undefined;
        } else {
            const args = argsOrState as PackagesCentralDnatArgs | undefined;
            if ((!args || args.pkg === undefined) && !opts.urn) {
                throw new Error("Missing required property 'pkg'");
            }
            resourceInputs["adom"] = args ? args.adom : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["pkg"] = args ? args.pkg : undefined;
            resourceInputs["pkgFolderPath"] = args ? args.pkgFolderPath : undefined;
            resourceInputs["scopetype"] = args ? args.scopetype : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(PackagesCentralDnat.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering PackagesCentralDnat resources.
 */
export interface PackagesCentralDnatState {
    adom?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    pkg?: pulumi.Input<string>;
    pkgFolderPath?: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a PackagesCentralDnat resource.
 */
export interface PackagesCentralDnatArgs {
    adom?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    pkg: pulumi.Input<string>;
    pkgFolderPath?: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
}
