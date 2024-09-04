// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ObjectUserCertificate extends pulumi.CustomResource {
    /**
     * Get an existing ObjectUserCertificate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ObjectUserCertificateState, opts?: pulumi.CustomResourceOptions): ObjectUserCertificate {
        return new ObjectUserCertificate(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortimanager:index/objectUserCertificate:ObjectUserCertificate';

    /**
     * Returns true if the given object is an instance of ObjectUserCertificate.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ObjectUserCertificate {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ObjectUserCertificate.__pulumiType;
    }

    public readonly adom!: pulumi.Output<string | undefined>;
    public readonly commonName!: pulumi.Output<string | undefined>;
    public readonly fosid!: pulumi.Output<number | undefined>;
    public readonly issuer!: pulumi.Output<string | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly scopetype!: pulumi.Output<string | undefined>;
    public readonly status!: pulumi.Output<string>;
    public readonly type!: pulumi.Output<string>;

    /**
     * Create a ObjectUserCertificate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ObjectUserCertificateArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ObjectUserCertificateArgs | ObjectUserCertificateState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ObjectUserCertificateState | undefined;
            resourceInputs["adom"] = state ? state.adom : undefined;
            resourceInputs["commonName"] = state ? state.commonName : undefined;
            resourceInputs["fosid"] = state ? state.fosid : undefined;
            resourceInputs["issuer"] = state ? state.issuer : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["scopetype"] = state ? state.scopetype : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as ObjectUserCertificateArgs | undefined;
            resourceInputs["adom"] = args ? args.adom : undefined;
            resourceInputs["commonName"] = args ? args.commonName : undefined;
            resourceInputs["fosid"] = args ? args.fosid : undefined;
            resourceInputs["issuer"] = args ? args.issuer : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["scopetype"] = args ? args.scopetype : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ObjectUserCertificate.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ObjectUserCertificate resources.
 */
export interface ObjectUserCertificateState {
    adom?: pulumi.Input<string>;
    commonName?: pulumi.Input<string>;
    fosid?: pulumi.Input<number>;
    issuer?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    type?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ObjectUserCertificate resource.
 */
export interface ObjectUserCertificateArgs {
    adom?: pulumi.Input<string>;
    commonName?: pulumi.Input<string>;
    fosid?: pulumi.Input<number>;
    issuer?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    type?: pulumi.Input<string>;
}
