// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class FileBlockingSecurityProfile extends pulumi.CustomResource {
    /**
     * Get an existing FileBlockingSecurityProfile resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FileBlockingSecurityProfileState, opts?: pulumi.CustomResourceOptions): FileBlockingSecurityProfile {
        return new FileBlockingSecurityProfile(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'panos:index/fileBlockingSecurityProfile:FileBlockingSecurityProfile';

    /**
     * Returns true if the given object is an instance of FileBlockingSecurityProfile.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FileBlockingSecurityProfile {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === FileBlockingSecurityProfile.__pulumiType;
    }

    /**
     * Description
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The device group.
     */
    public readonly deviceGroup!: pulumi.Output<string | undefined>;
    /**
     * Security profile name
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * List of rule specs
     */
    public readonly rules!: pulumi.Output<outputs.FileBlockingSecurityProfileRule[] | undefined>;
    /**
     * The vsys this object belongs in.
     */
    public readonly vsys!: pulumi.Output<string | undefined>;

    /**
     * Create a FileBlockingSecurityProfile resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: FileBlockingSecurityProfileArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: FileBlockingSecurityProfileArgs | FileBlockingSecurityProfileState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as FileBlockingSecurityProfileState | undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["deviceGroup"] = state ? state.deviceGroup : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["rules"] = state ? state.rules : undefined;
            resourceInputs["vsys"] = state ? state.vsys : undefined;
        } else {
            const args = argsOrState as FileBlockingSecurityProfileArgs | undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["deviceGroup"] = args ? args.deviceGroup : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["rules"] = args ? args.rules : undefined;
            resourceInputs["vsys"] = args ? args.vsys : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(FileBlockingSecurityProfile.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering FileBlockingSecurityProfile resources.
 */
export interface FileBlockingSecurityProfileState {
    /**
     * Description
     */
    description?: pulumi.Input<string>;
    /**
     * The device group.
     */
    deviceGroup?: pulumi.Input<string>;
    /**
     * Security profile name
     */
    name?: pulumi.Input<string>;
    /**
     * List of rule specs
     */
    rules?: pulumi.Input<pulumi.Input<inputs.FileBlockingSecurityProfileRule>[]>;
    /**
     * The vsys this object belongs in.
     */
    vsys?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a FileBlockingSecurityProfile resource.
 */
export interface FileBlockingSecurityProfileArgs {
    /**
     * Description
     */
    description?: pulumi.Input<string>;
    /**
     * The device group.
     */
    deviceGroup?: pulumi.Input<string>;
    /**
     * Security profile name
     */
    name?: pulumi.Input<string>;
    /**
     * List of rule specs
     */
    rules?: pulumi.Input<pulumi.Input<inputs.FileBlockingSecurityProfileRule>[]>;
    /**
     * The vsys this object belongs in.
     */
    vsys?: pulumi.Input<string>;
}
